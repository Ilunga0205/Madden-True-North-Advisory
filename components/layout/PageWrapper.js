export default function PageWrapper({ title, intro, children }) {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-16 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight mb-4">
          {title}
        </h1>
        {intro && (
          <p className="text-muted-foreground text-lg leading-8">
            {intro}
          </p>
        )}
      </header>

      <section className="space-y-16">
        {children}
      </section>
    </main>
  );
}
