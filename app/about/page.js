import PageWrapper from "@/components/layout/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper
      title="About True North Advisory"
      intro="We help organisations and individuals navigate complexity with clarity, structure, and long-term vision."
    >
      <div className="max-w-3xl space-y-6 text-base leading-7">
        <p>
          True North Advisory is built on the belief that strategic clarity
          enables better decisions. We work closely with clients to define
          direction, strengthen governance, and support sustainable growth.
        </p>

        <p>
          Our approach balances insight, structure, and pragmatism — ensuring
          that strategy translates into real-world outcomes.
        </p>
      </div>
    </PageWrapper>
  );
}
