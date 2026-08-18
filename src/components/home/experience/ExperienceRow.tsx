import type { Experience } from "../../../types/Experience";

interface ExperienceRowProps {
  experience: Experience;
}

export default function ExperienceRow({
  experience,
}: ExperienceRowProps) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-border py-6 md:grid-cols-[1fr_2fr_2fr] md:items-center md:gap-6">
      <span className="text-sm text-muted">
        {`${experience.startDate} - ${experience.endDate}`}
      </span>

      <h3 className="font-semibold text-foreground">
        {experience.role}
      </h3>

      <span className="text-muted-foreground">
        {experience.company}
      </span>
    </div>
  );
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}