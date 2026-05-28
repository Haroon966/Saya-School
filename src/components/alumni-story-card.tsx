import { ContentImage } from "@/components/content-image";

type AlumniStory = {
  id: string;
  name: string;
  role: string;
  story: string;
  image: string;
  imageAlt: string;
};

type AlumniStoryCardProps = {
  story: AlumniStory;
  headingLevel?: "h2" | "h3" | "p";
  compact?: boolean;
};

export function AlumniStoryCard({
  story,
  headingLevel = "h3",
  compact = false,
}: AlumniStoryCardProps) {
  const Heading = headingLevel;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[rgba(201,151,58,0.2)] bg-white shadow-sm">
      <div className="relative">
        <ContentImage src={story.image} alt={story.imageAlt} aspect="square" />
        <span className="absolute left-3 top-3 rounded-full bg-[var(--ink)]/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-white">
          Demo
        </span>
      </div>
      <div className={`flex flex-1 flex-col justify-between ${compact ? "p-4" : "p-7"}`}>
        <div>
          <Heading
            className={
              compact
                ? "text-sm font-medium text-[var(--ink)]"
                : "font-display text-2xl font-medium text-[var(--green-deep)]"
            }
          >
            {story.name}
          </Heading>
          <p
            className={`font-mono uppercase tracking-[0.06em] text-[var(--gold)] ${
              compact ? "mt-1 text-[11px]" : "mt-1 text-xs"
            }`}
          >
            {story.role}
          </p>
        </div>
        <p
          className={`leading-7 text-[var(--ink-muted)] ${compact ? "mt-3 text-xs leading-5" : "mt-4 flex-1 text-sm"}`}
        >
          {story.story}
        </p>
      </div>
    </article>
  );
}
