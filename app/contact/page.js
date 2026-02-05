"use client";

import PageWrapper from "@/components/layout/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper
      title="Book a Consultation"
      intro="Schedule a confidential consultation to discuss your needs and explore how we can support you."
    >
      <div className="max-w-2xl space-y-10">
        {/* Intro text */}
        <p className="text-muted-foreground leading-7">
          Consultations are available by appointment. Once confirmed,
          you will receive calendar details and next steps by email.
        </p>

        {/* Calendly embed */}
        <div className="rounded-2xl border bg-white overflow-hidden">
          <iframe
              src={process.env.NEXT_PUBLIC_CALENDLY_URL}
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a consultation"
          />
        </div>

        {/* Alternative contact */}
        <div className="rounded-2xl bg-muted p-8">
          <p className="font-medium mb-2">Prefer email?</p>
          <p className="text-muted-foreground">
            You can also reach us at{" "}
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
