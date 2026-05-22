import { useState } from 'react';

type Decision = {
  title: string;
  detail: string;
};

type Study = {
  slug: string;
  number: string;
  phase: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  problem: string;
  user: string;
  constraints: string[];
  decisions: Decision[];
  role: string;
  outcomes: string[];
  reflection: string;
};

type Props = {
  studies: Study[];
};

const emitTrack = (label: string) => {
  window.dispatchEvent(
    new CustomEvent('portfolio:track', {
      detail: { eventName: 'case_study_expand', label },
    })
  );
};

export default function CaseStudyAccordion({ studies }: Props) {
  const [openSlug, setOpenSlug] = useState<string | null>(studies[0]?.slug ?? null);

  return (
    <div className="space-y-4">
      {studies.map((study) => {
        const isOpen = openSlug === study.slug;
        const panelId = `case-study-${study.slug}`;

        return (
          <article key={study.slug} className="rounded-lg border border-border bg-surface-card">
            <button
              type="button"
              className="flex min-h-12 w-full cursor-pointer items-start justify-between gap-4 px-6 py-6 text-left transition-colors duration-200 hover:bg-surface-alt"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => {
                const nextOpen = isOpen ? null : study.slug;
                setOpenSlug(nextOpen);
                if (!isOpen) emitTrack(study.slug);
              }}
            >
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-[24px] italic text-accent/60">{study.number}</span>
                  <span className="text-label-sm font-semibold uppercase text-text-secondary">
                    {study.phase}
                  </span>
                </div>
                <p className="mb-2 text-label-sm font-semibold uppercase text-text-secondary">
                  {study.category}
                </p>
                <h2 className="mb-3 font-display text-case-title font-medium text-text">{study.title}</h2>
                <p className="mb-4 max-w-[560px] text-body-sm text-text-secondary">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-surface-alt px-2.5 py-1 text-label-sm font-medium normal-case text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span
                className={`mt-1 inline-flex min-h-12 min-w-12 items-center justify-center text-[22px] text-text transition-transform duration-300 ${
                  isOpen ? 'rotate-45' : ''
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              id={panelId}
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-border px-6 py-6">
                  <div className="space-y-10">
                    <div className="grid gap-6 md:grid-cols-2 md:gap-x-10">
                      <section>
                        <h3 className="mb-3 font-display text-subsection font-medium text-text">The problem</h3>
                        <p className="m-0 text-body-sm text-text-secondary">{study.problem}</p>
                      </section>
                      <section>
                        <h3 className="mb-3 font-display text-subsection font-medium text-text">The user</h3>
                        <p className="m-0 text-body-sm text-text-secondary">{study.user}</p>
                      </section>
                    </div>

                    <section>
                      <h3 className="mb-4 font-display text-subsection font-medium text-text">Constraints</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {study.constraints.map((constraint) => (
                          <div key={constraint} className="rounded-md bg-surface-alt px-4 py-3">
                            <p className="m-0 text-body-xs text-text-secondary">
                              <span className="mr-2 text-accent">→</span>
                              {constraint}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="mb-4 font-display text-subsection font-medium text-text">Key decisions</h3>
                      <div className="space-y-4">
                        {study.decisions.map((decision, index) => (
                          <div
                            key={decision.title}
                            className="border-t border-border pt-4 first:border-t-0 first:pt-0"
                          >
                            <div className="mb-2 flex items-start gap-3">
                              <span className="font-display text-[16px] italic text-accent">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <div>
                                <p className="mb-2 text-body-sm font-bold text-text">{decision.title}</p>
                                <p className="m-0 text-body-sm text-text-secondary">{decision.detail}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>

                    <div className="grid gap-6 md:grid-cols-2 md:gap-x-10">
                      <section>
                        <h3 className="mb-3 font-display text-subsection font-medium text-text">My role</h3>
                        <p className="m-0 text-body-sm text-text-secondary">{study.role}</p>
                      </section>
                      <section>
                        <h3 className="mb-3 font-display text-subsection font-medium text-text">Outcomes</h3>
                        <ul className="m-0 space-y-2 pl-0">
                          {study.outcomes.map((outcome) => (
                            <li key={outcome} className="list-none text-body-sm text-text-secondary">
                              <span className="mr-2 text-accent">✦</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <section className="border-l-[3px] border-accent bg-surface-alt px-6 py-5">
                      <h3 className="mb-3 font-display text-subsection font-medium text-text">Reflection</h3>
                      <p className="m-0 text-body-sm italic text-text-secondary">{study.reflection}</p>
                    </section>

                    <a
                      href={`/work/${study.slug}`}
                      className="ui-link inline-flex min-h-12 cursor-pointer items-center text-body-sm font-semibold text-text"
                    >
                      Read this case study on its own page
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
