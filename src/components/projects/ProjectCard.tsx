import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface">
      {/* Project Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-muted-foreground text-justify">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-md border border-border px-3 py-1 text-sm text-muted-foreground"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-5">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted"
            >
              GitHub
              <FiGithub className="h-4 w-4" />
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted"
            >
              Live Demo
              <FiExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}