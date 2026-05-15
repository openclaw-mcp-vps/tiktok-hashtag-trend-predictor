export default function Home() {
  const faqs = [
    {
      q: "How does the trend prediction work?",
      a: "We analyze hashtag momentum, engagement velocity, and historical patterns using proprietary algorithms to surface hashtags before they peak."
    },
    {
      q: "How early can I get predictions?",
      a: "Our system typically identifies trending hashtags 12–48 hours before they reach peak virality, giving you a real head start."
    },
    {
      q: "Can I get alerts for specific niches?",
      a: "Yes. You can filter predictions by niche or category and receive email alerts when a hashtag in your area is predicted to trend."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          TikTok Growth Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Predict Trending Hashtags<br />
          <span className="text-[#58a6ff]">Before They Peak</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Analyze TikTok hashtag momentum and engagement patterns to discover which hashtags will explode next — and post before the crowd.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Predicting Trends — $13/mo
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>⚡ Real-time momentum tracking</span>
          <span>🔔 Trend alerts before peak</span>
          <span>📊 Engagement analytics</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto bg-[#161b22] text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$13</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Unlimited hashtag monitoring</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> 12–48h early trend predictions</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Email alerts for trending hashtags</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Niche & category filters</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Engagement velocity dashboard</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
