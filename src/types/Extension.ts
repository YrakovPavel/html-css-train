import type {ImageName} from "@/images.ts";

export interface Extension{
    name: string;
    description: string;
    image: ImageName;
}