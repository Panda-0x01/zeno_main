import { stack, stats } from "@/lib/content";

export function TrustedBy() {
  return (
    <section
      aria-label="Stack and product facts"
      className="border-b border-line bg-surface"
    >
      <div className="container-page">
        <div className="flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="mono-label text-muted-2">Runs on</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {stack.map((name) => (
              <li
                key={name}
                className="text-[14px] font-medium tracking-[-0.01em] text-ink-soft"
              >
                {name}
              </li>
            ))}
          </ul>
          <p className="mono-label text-muted-2">Open source, end to end</p>
        </div>
      </div>

      <div className="border-t border-line">
        <dl className="container-page grid grid-cols-2 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-t border-line px-1 py-6 first:border-t-0 [&:nth-child(2)]:border-t-0 sm:border-l sm:border-t-0 sm:px-7 sm:py-7 sm:first:border-l-0 sm:first:pl-0"
            >
              <dd className="text-[27px] font-semibold leading-none tracking-[-0.035em] text-ink tabular-nums">
                {stat.value}
              </dd>
              <dt className="mono-label mt-2.5 text-muted-2">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
