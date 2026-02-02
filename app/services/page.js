import PageWrapper from "@/components/layout/PageWrapper";

const services = [
  {
    title: "Strategic Advisory",
    description:
      "High-level strategic guidance to support leadership decision-making and long-term positioning.",
  },
  {
    title: "Governance & Structure",
    description:
      "Support in designing governance frameworks that enable accountability and resilience.",
  },
  {
    title: "Organisational Alignment",
    description:
      "Helping teams align strategy, operations, and culture for effective execution.",
  },
];

export default function ServicesPage() {
  return (
    <PageWrapper
      title="Our Services"
      intro="Focused advisory services designed to support clarity, governance, and sustainable growth."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border p-8"
          >
            <h3 className="text-lg font-medium mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
