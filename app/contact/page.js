import PageWrapper from "@/components/layout/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper
      title="Book a Consultation"
      intro="Schedule a confidential consultation to discuss your needs and explore how we can support you."
    >
      <div className="max-w-xl space-y-6">
        <p className="text-muted-foreground leading-7">
          Consultations are available by appointment. Once confirmed,
          you will receive calendar details and next steps.
        </p>

        <div className="rounded-2xl border p-8">
          <p className="font-medium mb-2">Contact</p>
          <p className="text-muted-foreground">
            Email: info@truenorthadvisory.com
          </p>
        </div>

        <div className="rounded-2xl bg-muted p-8">
          <p className="font-medium mb-2">
            Booking integration
          </p>
          <p className="text-muted-foreground">
            Calendar booking will be enabled once the scheduling
            system is connected.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
