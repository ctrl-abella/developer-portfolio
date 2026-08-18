import ExperienceRow from "./ExperienceRow";
import { experiences } from "../../../data/experiences";


export default function Experience() {
  return (
    <section id="experience" className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          Experience
        </h2>

        <div className="mt-8">
          {experiences.map((experience, index) => (
            <ExperienceRow
              key={`${experience.company}-${index}`}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </section>
  );
}