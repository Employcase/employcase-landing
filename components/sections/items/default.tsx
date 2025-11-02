import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Better data. Smarter hires. Less time wasted.",
  items = [
    {
      title: "2D/3D Job Simulations",
      description: "Interactive candidate assessments that collect better data than static CVs",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "AI Analysis Pipeline",
      description: "Advanced AI tools to evaluate candidate data and engagement metrics",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "AI Interviews",
      description: "Automated chat and voice interviews powered by AI technology",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "AI Co-Pilot Assistant",
      description: "Automatically lists and moves candidates through your hiring pipeline",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "ATS Integration",
      description: "Seamless integration with popular applicant tracking systems",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Targeted Hiring Tools",
      description: "Specific tools designed for specific hire cases and scenarios",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Data-Driven Decisions",
      description: "Make better hiring decisions with comprehensive candidate insights",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Save Time & Money",
      description: "Reduce time wasted on poor judgements and improve hiring outcomes",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
