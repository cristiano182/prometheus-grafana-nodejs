import { Video } from "../../entities/video/video";

export type ISearchVideoUsecase = {
    search: (id: string) => Promise<Video[]>
}