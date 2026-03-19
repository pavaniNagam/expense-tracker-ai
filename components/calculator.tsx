export function Calculator() {
  return (
    <section
      id="calculator"
      className="relative w-full py-20 md:py-28 bg-neutral-50 dark:bg-neutral-900/50 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Try It Now</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Take the NPS calculator for a spin and see how it works
          </p>
        </div>

        <div className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 shadow-lg">
          {/* NPSCalculator component will be added here */}
        </div>
      </div>
    </section>
  );
}
