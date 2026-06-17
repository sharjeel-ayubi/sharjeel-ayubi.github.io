import { Section } from "./ui/Section";
import { Tag } from "./ui/Tag";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="A full-stack iOS toolkit."
      lead="Grouped the way I actually use them — from the Swift language surface down to the cloud and the delivery pipeline."
    >
      <div className="mt-[34px] grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="glass group p-[22px]">
            <h3 className="mb-3.5 flex items-center gap-2.5 text-[1.06rem] font-semibold">
              <span className="h-[9px] w-[9px] rounded-[3px] bg-aurora" aria-hidden />
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-[7px]">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
