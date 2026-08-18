import ProjectCard from "../projects/ProjectCard";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section heading */}
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            Portfolio
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-7 text-muted-foreground">
            A selection of projects I’ve built while exploring web, mobile,
            and full-stack development.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          

          <ProjectCard
            title="Distributor System"
            description="A full-stack product ordering system with cart management, checkout, payment integration, and order processing."
            image="/images/projects/distributor.png"
            technologies={[
              "React",
              "TypeScript",
              "Node.js",
              "Express",
              "Prisma",
              "PostgreSQL",
              "Paymongo"
            ]}
            githubUrl="https://github.com/ctrl-abella/distributor-system"
            liveUrl="https://lifestyles-distributor-app.vercel.app/"
          />
          <ProjectCard
            title="STIMTA Inventory Management and Maintenance Scheduling System"
            description="An enterprise system for inventory tracking, asset management, and preventive maintenance scheduling."
            image="/images/projects/STIMTA_Dashboard.png"
            technologies={[
              "PHP",
              "Laravel",
              "Eloquent",
              "MVC",
              "MariaDB",
              "Bootstrap"
            ]}
            liveUrl="https://stimtainventory.dpdns.org/dashboard"
          />
          <ProjectCard
            title="DigiScore"
            description="A digital basketball league management application for managing seasons, teams, matches, and league standings."
            image="/images/projects/digiscore.png"
            technologies={[
              "Kotlin",
              "Jetpack Compose",
              "Room",
              "SQLite",
              "MVVM",
            ]}
            githubUrl="https://github.com/ctrl-abella/digiscore"
          />
        </div>
      </div>
    </section>
  );
}