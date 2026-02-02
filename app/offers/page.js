import PageWrapper from "@/components/layout/PageWrapper";

const offers = [
  {
    title: "Executive Advisory",
    description:
      "Ongoing strategic advisory support for executives navigating complexity and change.",
  },
  {
    title: "Strategic Review",
    description:
      "A focused engagement to assess strategic direction, risks, and opportunities.",
  },
  {
    title: "Governance Support",
    description:
      "Short-term or project-based support to strengthen governance and decision structures.",
  },
];

export default function OffersPage() {
  return (
    <PageWrapper
      title="Our Offers"
      intro="Clear engagement formats designed to support leadership, strategy, and governance."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {offers.map((offer) => (
          <div
            key={offer.title}
            className="rounded-2xl border p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-medium mb-3">
                {offer.title}
              </h3>
              <p className="text-muted-foreground leading-7">
                {offer.description}
              </p>
            </div>

            <div className="mt-6">
              <a
                href="/contact"
                className="text-sm font-medium underline underline-offset-4"
              >
                Enquire about this offer
              </a>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
