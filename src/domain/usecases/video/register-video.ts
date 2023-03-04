import { Video } from "../../entities/video/video";


export interface IRegisterVideoUsecase {
    register: (video: Video) => Promise<Video>
}