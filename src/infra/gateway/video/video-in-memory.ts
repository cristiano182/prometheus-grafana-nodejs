import { randomUUID } from "crypto";
import { VideoDTO } from "../../../application/dto/video/video";
import { IVideoGateway } from "../../../application/interfaces/gateway/video";

export class VideoGatewayRedisInMemory implements IVideoGateway {

    async register(video: VideoDTO): Promise<VideoDTO> {
    
        const generatedUUID = randomUUID();
    
        const newProduct: VideoDTO = {
          id: generatedUUID,
          ...video,
        }
    
   
        return newProduct
      }


  async  search (id: string): Promise<VideoDTO[]>{

    return []
   
    }
    
}