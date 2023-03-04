import { IRegisterVideoUsecase } from "../../../domain/usecases/video/register-video";
import { VideoSizeLargestError } from "../../../domain/errors/video/video-size-largest";
import { IVideoGateway } from "../../interfaces/gateway/video";
import { Video } from "../../../domain/entities/video/video";



export class RegisterVideoUsecase implements IRegisterVideoUsecase {
   constructor (private readonly videoGateway: IVideoGateway ) {}
   async register (video: Video): Promise<Video> {

      // if(video?.sizeMegabytes > 100) {
      //    throw new VideoSizeLargestError()
      // }
      return this.videoGateway.register(video)

   }
  
}



