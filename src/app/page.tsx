import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white dark:bg-black">
      <Hero />
    </main>
  );
}
