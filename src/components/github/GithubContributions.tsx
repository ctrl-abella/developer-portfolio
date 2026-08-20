"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () =>
    import("react-github-calendar").then(
      (mod) => mod.GitHubCalendar
    ),
  {
    ssr: false,
  }
);

export default function GithubContributions() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            Open Source
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
            GitHub Activity
          </h2>

          <p className="mt-4 text-muted-foreground">
            A look at my recent activity and contributions on GitHub.
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border p-6">
          <GitHubCalendar 
          username="ctrl-abella" 
          colorScheme="light"
          theme={{
            dark: [
            "#262626",
            "#404040",
            "#737373",
            "#a3a3a3",
            "#f5f5f5",
            ],
        }}
          />
        </div>
      </div>
    </section>
  );
}