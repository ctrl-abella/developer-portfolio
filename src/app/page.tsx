import Hero from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Experience from "../components/home/experience/Experience";
import Skill from "../components/home/skills/Skills";
import GithubContributions from "../components/github/GithubContributions";
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white dark:bg-black">
      <Hero />
      <FeaturedProjects/>
      <Experience/>
      <Skill/>
      <GithubContributions/>
    </main>
  );
}
