import SkillCard from "./SkillCard";
import { skills } from "../../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            Technologies
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Skills
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-7 text-muted-foreground">
            Technologies and tools I use to build web, mobile, and
            full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard
            key={skill.name}
            skill={skill}
            />
          ))}
        </div>

      </div>
    </section>
  );
}