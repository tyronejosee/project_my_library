import { AnimatedContent } from "@/components/animated/animated-content";

type DefaultTransitionProps = {
  children: React.ReactNode;
};

function DefaultTransition({ children }: DefaultTransitionProps) {
  return (
    <AnimatedContent
      distance={120}
      direction="vertical"
      reverse={false}
      config={{ tension: 100, friction: 20 }}
      initialOpacity={0}
      animateOpacity
      scale={1.0}
      threshold={0.1}
    >
      {children}
    </AnimatedContent>
  );
}

export { DefaultTransition };
