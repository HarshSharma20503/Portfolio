import { motion } from "framer-motion";
import Header from "@/components/ui/Header";
import { Card } from "@/components/ui/card";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { experiences } from "@/config/experience";

const experienceData = experiences.map((experience) => ({
  title: experience.date,
  content: (
    <Card className="p-3 md:p-8 bg-background/50 backdrop-blur-sm border-muted hover:bg-accent/10 transition-colors">
      <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
      <p className="text-lg text-muted-foreground mb-4">
        {experience.company} • {experience.duration}
      </p>
      <ul className="list-disc pl-6 space-y-3 text-base mb-6">
        {experience.responsibilities.map((resp) => (
          <li key={resp}>{resp}</li>
        ))}
      </ul>
      <div className="border-t border-muted pt-4">
        <p className="font-medium text-lg mb-2">
          {experience.category == "tech" ? "Tech Stack" : "Concepts"}
        </p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-primary/10 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Card>
  ),
}));

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background/50"
    >
      <div className="max-w-7xl mx-auto">
        <Header
          title="Experience"
          subtitle="My professional journey"
          gradient={true}
          align="center"
          className="mb-2"
        />

        <Timeline data={experienceData} />
      </div>
    </section>
  );
};

// Timeline Component
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-5 md:pt-2 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-muted border border-muted" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground">
                {item.title}
              </h3>
            </div>
            <div className="relative pl-20 pr-2 md:pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + 50 + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-muted via-[50%] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-500 via-red-500 to-transparent from-[20%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
