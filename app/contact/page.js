"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { globalStyles } from "@/styles/globalStyles";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: ""
  });
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [workDays, setWorkDays] = useState([]);

  useEffect(() => {
    fetchAvailabilitySettings();
  }, []);

  const fetchAvailabilitySettings = async () => {
    try {
      const res = await fetch('/api/get-availability-settings');
      const data = await res.json();
      if (data.workDays) {
        setWorkDays(data.workDays);
      }
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  useEffect(() => {
    if (formData.date) {
      fetchAvailableSlots(formData.date);
    }
  }, [formData.date]);

  const fetchAvailableSlots = async (date) => {
    setLoadingSlots(true);
    try {
      const res = await fetch('/api/get-available-slots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date })
      });

      const data = await res.json();
      
      if (data.slots) {
        setAvailableSlots(data.slots);
      } else {
        setAvailableSlots([]);
        if (data.message) {
          alert(data.message);
        }
      }
    } catch (error) {
      console.error('Error fetching slots:', error);
      setAvailableSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/create-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", date: "", time: "" });
        setAvailableSlots([]);
      } else {
        alert('Booking failed: ' + data.error);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const isDateDisabled = (dateString) => {
    if (workDays.length === 0) return false;
    
    const date = new Date(dateString + 'T00:00:00');
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    return !workDays.includes(dayName);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    
    if (isDateDisabled(selectedDate)) {
      alert('This day is not available for bookings. Please select a different date.');
      e.target.value = formData.date;
      return;
    }
    
    setFormData({...formData, date: selectedDate, time: ""});
  };

  const today = new Date().toISOString().split('T')[0];

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 90);
  const maxDateString = maxDate.toISOString().split('T')[0];

  return (
    <main className="bg-white min-h-screen">
      <style jsx global>{globalStyles}</style>

      {/* Compact Hero Section */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-slideDown" style={{ animationDelay: "0.1s" }}>
              <div className="inline-block px-4 py-2 bg-brand text-white font-body text-xs sm:text-sm font-semibold rounded-full mb-6">
                Let&#39;s Connect
              </div>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-charcoal leading-tight mb-4">
                Book a <span className="text-brand italic">consultation</span>
              </h1>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <p className="font-body text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
                Schedule a confidential consultation to discuss your needs and explore how we can support you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Form + What to Expect */}
            <div className="order-2 lg:order-1 space-y-6">
              {success ? (
                <div className="text-center py-12 bg-warm-white rounded-2xl">
                  <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-charcoal mb-3">Booking Confirmed</h2>
                  <p className="font-body text-stone-700">
                    Check your email for calendar invite and next steps.
                  </p>
                </div>
              ) : (
                <div className="bg-warm-white rounded-2xl p-6 sm:p-8 border-2 border-stone-200">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block font-body text-sm font-semibold text-charcoal mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white border-2 border-stone-300 font-body focus:border-brand focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block font-body text-sm font-semibold text-charcoal mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white border-2 border-stone-300 font-body focus:border-brand focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-sm font-semibold text-charcoal mb-2">
                          Date
                        </label>
                        <input
                          type="date"
                          required
                          min={today}
                          max={maxDateString}
                          value={formData.date}
                          onChange={handleDateChange}
                          className="w-full px-4 py-3 bg-white border-2 border-stone-300 font-body focus:border-brand focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block font-body text-sm font-semibold text-charcoal mb-2">
                          Time
                        </label>
                        <select
                          required
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full px-4 py-3 bg-white border-2 border-stone-300 font-body focus:border-brand focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={!formData.date || loadingSlots}
                        >
                          <option value="">
                            {!formData.date 
                              ? 'Select date' 
                              : loadingSlots 
                              ? 'Loading...' 
                              : availableSlots.length === 0
                              ? 'No times'
                              : 'Select time'}
                          </option>
                          {availableSlots.map((slot) => (
                            <option key={slot.time} value={slot.time}>
                              {slot.display}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !formData.time}
                      className="w-full bg-brand text-white py-3.5 font-body font-semibold hover:bg-brand-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Confirming...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Booking</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}

              {/* What to Expect Card — moved below booking form */}
              <div className="bg-brand-light rounded-2xl p-6 sm:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-2">
                      What to expect
                    </h3>
                    <p className="font-body text-sm sm:text-base text-stone-700 leading-relaxed">
                      Our consultations are confidential, focused, and designed to understand your unique context and challenges.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="font-body text-sm text-stone-700">20-minute initial consultation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="font-body text-sm text-stone-700">No obligation or commitment required</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="font-body text-sm text-stone-700">Clear next steps and recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Client Photo, Email Card, Trust Stats */}
            <div className="order-1 lg:order-2 space-y-6">

              {/* Client Photo */}
              <div className="relative h-[500px] md:h-[560px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/bookingpage.jpg"
                  alt="Inge Madden"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                  quality={100}
                />
              </div>

              {/* Email Alternative Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-stone-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-charcoal mb-2">
                      Prefer email?
                    </h3>
                    <p className="font-body text-sm text-stone-600 mb-3">
                      We&#39;ll respond within 24 hours.
                    </p>
                    <a
                      href="mailto:inge@maddentruenorthadvisory.com"
                      className="inline-flex items-center gap-2 font-body text-sm font-semibold text-brand hover:gap-3 transition-all group"
                    >
                      <span>inge@maddentruenorthadvisory.com</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Trust Indicator */}
              <div className="bg-warm-white rounded-2xl p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-display text-2xl sm:text-3xl text-brand mb-1">15+</div>
                    <div className="font-body text-xs text-stone-600">Years</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl text-brand mb-1">100+</div>
                    <div className="font-body text-xs text-stone-600">Clients</div>
                  </div>
                  <div>
                    <div className="font-display text-2xl sm:text-3xl text-brand mb-1">5</div>
                    <div className="font-body text-xs text-stone-600">Continents</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}