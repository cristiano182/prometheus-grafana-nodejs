import { randomUUID } from "crypto";
import { VideoDTO } from "../../../application/dto/video/video";
import { IVideoGateway } from "../../../application/interfaces/gateway/video";
import { RedisHelper } from "../../database/redis";


export class VideoGatewayRedis implements IVideoGateway {

    async register(video: VideoDTO): Promise<VideoDTO> {
        const redisClient = await RedisHelper.getClient();
    
        const generatedUUID = randomUUID();
    
        const newProduct: VideoDTO = {
          id: generatedUUID,
          ...video,
        }
    
        await redisClient.set(generatedUUID, JSON.stringify(newProduct));
    
        const data = await redisClient.get(generatedUUID);
    
        return data
      }


  async  search (id: string): Promise<VideoDTO[]>{

    return []
   
    }
    
}