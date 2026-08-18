import { ComponentType} from "react";

export interface Skill {
    name: string
    icon: ComponentType<{ size?: number }>;
}