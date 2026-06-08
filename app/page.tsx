export default function Page() {
  const faqs = [
    {
      q: "How does the playbook automation work?",
      a: "When an incident webhook fires, our engine automatically creates a Slack/Teams channel, pages the on-call engineer, and executes your pre-configured diagnostic scripts — all within seconds."
    },
    {
      q: "Can I customize the runbooks and scripts?",
      a: "Yes. You define playbooks in YAML, attach shell or Python diagnostic scripts, and map them to alert severity levels. Full version control integration included."
    },
    {
      q: "What does the $49/mo plan include?",
      a: "Unlimited incidents, up to 10 team members, Slack & Teams integration, automated post-mortem generation, on-call scheduling, and 90-day incident history."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          DevOps &amp; SRE Tooling
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate Your{" "}
          <span className="text-[#58a6ff]">Incident Response</span>{" "}
          Workflows
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop scrambling during outages. Automatically create incident channels, page on-call engineers, run diagnostics, and generate post-mortems — so your team can focus on fixing, not coordinating.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Automating — $49/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-white">Pro Plan</h2>
            <span className="px-2 py-0.5 rounded text-xs bg-[#1f6feb] text-white font-medium">Most Popular</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything a growing DevOps team needs to respond faster and learn from every incident.</p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-white">$49</span>
            <span className="text-[#8b949e] ml-1">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited incident workflows",
              "Slack & Microsoft Teams integration",
              "Automated on-call paging",
              "Diagnostic script execution",
              "AI-assisted post-mortem generation",
              "On-call schedule management",
              "Webhook receivers for any alert source",
              "90-day incident history & analytics",
              "Up to 10 team members"
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#3fb950] mt-0.5">&#10003;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Incident Response Playbook Automator. All rights reserved.
      </footer>
    </main>
  );
}
