import type { IProject } from "@/entities/project";

export type TProjectsSwiperSlide = Pick<
  IProject,
  "id" | "name" | "shortDescription" | "thumbnailImageUrl" | "websiteUrl"
>;
