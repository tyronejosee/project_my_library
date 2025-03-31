import Link from "next/link";
import { Media } from "@/interfaces";
import { ChevronRight } from "lucide-react";
import { Carousel } from "@/components/home";

interface Props {
  media: Media[];
  title: string;
  pathname: string;
  subtitle: string;
  genre: string;
}

export default function ContentSection({
  media,
  title,
  subtitle,
  pathname,
  genre,
}: Props) {
  return (
    <section className="max-w-screen-2xl mx-auto py-6">
      <header className="mb-6 flex items-center justify-between px-4">
        <div>
          <h2 className="font-bold leading-tight tracking-tighter text-4xl lg:leading-[1.1]">
            {title}
          </h2>
          <span className="text-primary">{subtitle}</span>
        </div>
        <Link
          href={`/${pathname}/genres/${genre}`}
          className="flex items-center text-sm font-medium text-primary hover:underline"
        >
          Ver todo <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </header>
      <Carousel items={media} />
    </section>
  );
}
