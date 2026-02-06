"use client";

import { useState, useEffect } from "react";
import PageWrapper from "@/components/layout/PageWrapper";

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
    <PageWrapper
      title="Book a Consultation"
      intro="Schedule a confidential consultation to discuss your needs and explore how we can support you."
    >
      <div className="max-w-2xl space-y-10">
        <p className="text-muted-foreground leading-7">
          Consultations are available by appointment. Once confirmed,
          you will receive calendar details and next steps by email.
        </p>

        {/* Booking Form */}
        <div className="rounded-2xl border bg-white p-8">
          {success ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-semibold mb-2">✓ Booking Confirmed</h3>
              <p className="text-muted-foreground">
                Check your email for calendar invite and details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Date</label>
                <input
                  type="date"
                  required
                  min={today}
                  max={maxDateString}
                  value={formData.date}
                  onChange={handleDateChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Time</label>
                <select
                  required
                  value={formData.time}
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg"
                  disabled={!formData.date || loadingSlots}
                >
                  <option value="">
                    {!formData.date 
                      ? 'Select a date first' 
                      : loadingSlots 
                      ? 'Loading available times...' 
                      : availableSlots.length === 0
                      ? 'No available times'
                      : 'Select time'}
                  </option>
                  {availableSlots.map((slot) => (
                    <option key={slot.time} value={slot.time}>
                      {slot.display}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={loading || !formData.time}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50"
              >
                {loading ? 'Booking...' : 'Confirm Booking'}
              </button>
            </form>
          )}
        </div>

        {/* Alternative contact */}
        <div className="rounded-2xl bg-muted p-8">
          <p className="font-medium mb-2">Prefer email?</p>
          <p className="text-muted-foreground">
            Reach out directly at{" "}
            <a
              href="mailto:info@truenorthadvisory.com"
              className="underline underline-offset-4"
            >
              info@truenorthadvisory.com
            </a>
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}