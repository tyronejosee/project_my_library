import { AnimatedContent } from "@/components/animated";

type Props = {
  children: React.ReactNode;
};

export default function DefaultTransition({ children }: Props) {
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
