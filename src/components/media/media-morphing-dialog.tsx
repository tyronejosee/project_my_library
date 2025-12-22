"use client";

import { Button, ScrollShadow } from "@heroui/react";
import {
  BadgeCheck,
  Calendar,
  Film,
  HardDrive,
  MapPin,
  Move3dIcon,
  Play,
  Swords,
} from "lucide-react";
import type { JSX } from "react";

import { MorphingDialog } from "@/components/common/morphing-dialog";
import { MorphingDialogClose } from "@/components/common/morphing-dialog-close";
import { MorphingDialogContainer } from "@/components/common/morphing-dialog-container";
import { MorphingDialogContent } from "@/components/common/morphing-dialog-content";
import { MorphingDialogImage } from "@/components/common/morphing-dialog-image";
import { MorphingDialogSubtitle } from "@/components/common/morphing-dialog-subtitle";
import { MorphingDialogTitle } from "@/components/common/morphing-dialog-title";
import { MorphingDialogTrigger } from "@/components/common/morphing-dialog-trigger";
import { normalizeString, normalizeStringImdb } from "@/lib/utils";
import type { Media } from "@/types";

type DialogType = "card" | "search";

type MediaMorphingDialogProps = {
  media: Media;
  dialogType: DialogType;
  onTriggerClick?: () => void;
};

function CardTrigger({ media, imageWidth }: { media: Media; imageWidth: number }) {
  return (
    <MorphingDialogTrigger
      style={{ borderRadius: "20px" }}
      className="group z-10 inline-flex w-fit h-fit flex-col overflow-hidden bg-content1 outline-none! rounded-2xl border border-content2 dark:group-hover:border-content2 text-start relative"
    >
      <MorphingDialogImage
        src={media.image || "/placeholder.svg"}
        height={256}
        width={imageWidth}
        alt={media.folder_name}
        imgClassName="group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute z-10 inset-0 bg-linear-to-t from-black w-full to-transparent opacity-0 transition-opacity hover:opacity-100">
        <MorphingDialogTitle>
          <h2 className="absolute bottom-0 px-4 py-4">{media.folder_name}</h2>
        </MorphingDialogTitle>
      </div>
      <div className="absolute top-2 left-2 z-20">
        <span className="bg-content1 border border-content2 block md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 rounded-full text-xs font-medium shadow-lg">
          {media.genre}
        </span>
      </div>
    </MorphingDialogTrigger>
  );
}

function SearchTrigger({ media, imageWidth }: { media: Media; imageWidth: number }) {
  return (
    <MorphingDialogTrigger
      style={{ borderRadius: "20px" }}
      className="z-50 flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
    >
      <MorphingDialogImage
        src={media.image || "/placeholder.svg"}
        height={90}
        width={40}
        alt={media.folder_name}
        className="w-14 h-20 shrink-0 rounded overflow-hidden relative"
      />
      <div className="flex-1 min-w-0">
        <MorphingDialogTitle>
          <h4 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
            {media.folder_name}
          </h4>
        </MorphingDialogTitle>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
          <span>{media.type}</span>
          <span>•</span>
          <span>{media.has_file ? "Disponible" : "No disponible"}</span>
        </div>
      </div>
    </MorphingDialogTrigger>
  );
}

function MediaMorphingDialog({ media, dialogType }: MediaMorphingDialogProps) {
  const imageWidth = media.type === "Movies" ? 165 : 182;

  const triggerByType: Record<DialogType, JSX.Element> = {
    card: <CardTrigger media={media} imageWidth={imageWidth} />,
    search: <SearchTrigger media={media} imageWidth={imageWidth} />,
  };

  return (
    <MorphingDialog transition={{ type: "spring", bounce: 0.05, duration: 0.25 }}>
      {triggerByType[dialogType]}

      {/* Media details */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{ borderRadius: "24px" }}
          className="pointer-events-auto relative flex flex-col md:flex-row grow gap-2 h-auto w-full overflow-hidden backdrop-blur-3xl backdrop-saturate-150 bg-black/50 border border-content2 sm:max-w-4xl p-0 shadow-2xl m-4"
        >
          {/* Top/Left panel - Poster Image */}
          <section className="flex w-45 md:w-75 lg:w-87.5 flex-none overflow-hidden md:h-auto items-center justify-center mx-auto pt-4 md:pt-0">
            <MorphingDialogImage
              src={media.image}
              alt={media.folder_name}
              className="w-full h-fit flex items-center justify-center"
              imgClassName="w-full h-auto object-contain max-h-full rounded-2xl md:rounded-none border md:border-none border-content2"
            />
          </section>

          {/* Right panel - Information */}
          <section className="flex-1 flex flex-col p-4 md:p-6 gap-6 overflow-hidden">
            <div className="flex flex-col gap-1">
              <MorphingDialogTitle>
                <h3 className="text-center md:text-left text-3xl md:text-4xl font-black leading-tight tracking-tight">
                  {media.folder_name}
                </h3>
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="text-foreground-500 text-md md:text-lg font-medium opacity-70 truncate max-w-md mx-auto md:mx-0">
                {media.file_name}
              </MorphingDialogSubtitle>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
              <Button
                color="primary"
                startContent={<Play size={18} />}
                onPress={() =>
                  window.open(
                    `https://www.youtube.com/results?search_query=${normalizeString(
                      media.slug
                    )}+trailer`,
                    "_blank"
                  )
                }
              >
                Trailer
              </Button>

              <Button
                color="warning"
                startContent={<Move3dIcon size={18} />}
                onPress={() =>
                  window.open(
                    `https://www.imdb.com/find/?q=${normalizeStringImdb(media.slug)}`,
                    "_blank"
                  )
                }
              >
                IMDB
              </Button>
              <Button variant="flat" color="success" startContent={<BadgeCheck size={18} />}>
                {media.has_file ? "Disponible" : "No Disponible"}
              </Button>
            </div>
            <ScrollShadow size={24} className="flex-1 pr-1 max-h-[36vh]">
              <ul className="flex flex-col divide-y-2 divide-content2 divide-dotted">
                <li className="flex items-center gap-3 py-3">
                  <HardDrive size={16} className="text-primary shrink-0" />
                  <span className="text-foreground w-20">Tamaño</span>
                  <span className="font-semibold text-foreground">{media.file_size}</span>
                </li>

                <li className="hidden lg:flex items-center gap-3 py-3">
                  <Calendar size={16} className="text-secondary shrink-0" />
                  <span className="text-foreground w-20">Fecha</span>
                  <span className="font-semibold text-foreground">
                    {media.created_at && !isNaN(Date.parse(media.created_at))
                      ? new Date(media.created_at).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      : "Pendiente"}
                  </span>
                </li>

                <li className="flex items-center gap-3 py-3">
                  <Swords size={16} className="text-primary shrink-0" />
                  <span className="text-foreground w-20">Género</span>
                  <span className="font-semibold text-foreground">{media.genre}</span>
                </li>

                <li className="flex items-center gap-3 py-3">
                  <Film size={16} className="text-primary shrink-0" />
                  <span className="text-foreground w-20">Tipo</span>
                  <span className="font-semibold text-foreground">{media.type}</span>
                </li>

                <li className="flex items-start gap-3 py-3">
                  <MapPin size={16} className="text-primary mt-0.5" />
                  <span className="text-foreground w-20">Ubicación</span>
                  <span className="font-semibold text-foreground truncate" title={media.location}>
                    {media.location}
                  </span>
                </li>
              </ul>
            </ScrollShadow>
            <MorphingDialogClose className="absolute top-4 right-4 z-50 p-2 rounded-full bg-content2/50 backdrop-blur-xl text-foreground hover:bg-danger hover:text-white transition-all border border-white/5 active:scale-90" />
          </section>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}

export { MediaMorphingDialog };
