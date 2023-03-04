import { Video } from "../../../../domain/entities/video/video";

export interface IVideoGateway {
    register: (video: Video) => Promise<Video>
    search: (id: string) => Promise<Video[]>
}