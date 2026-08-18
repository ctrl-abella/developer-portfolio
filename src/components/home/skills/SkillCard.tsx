import { Skill } from "@/src/types/Skill";

export default function SkillCard({
  skill
}: {skill: Skill}) {

    const Icon = skill.icon;
    return (
        <div
        className="
            flex items-center gap-3
            rounded-lg
            border border-border
            px-4 py-3
            transition-colors
            hover:bg-surface
        "
        >
        <div className="flex h-6 w-6 items-center justify-center">
            {<Icon 
            size={24}
            />}
        </div>

        <span className="text-sm font-medium text-foreground">
            {skill.name}
        </span>
        </div>
    ); 
}