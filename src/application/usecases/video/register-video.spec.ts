import { RegisterVideoUsecase } from "./register-video"
import { VideoGatewayRedisInMemory } from "../../../infra/gateway/video/video-in-memory"
import { VideoDTO } from "@/application/dto/video/video"
import { IVideoGateway } from "@/application/interfaces/gateway/video"
import { IRegisterVideoUsecase } from "@/domain/usecases/video/register-video"

describe('RegisterVideoUsecase', () => {
    let videoGateway: IVideoGateway
    let registerVideo: IRegisterVideoUsecase

    beforeAll(() => {
         videoGateway = new VideoGatewayRedisInMemory()
         registerVideo = new RegisterVideoUsecase(videoGateway)
    })


    it('should be able to register a new video', async () => {

        const videoMock: VideoDTO = {
            name: 'any_name',
            description: 'any_description',
            date: 100,
            sizeMegabytes: 100
        }

        const video = await registerVideo.register(videoMock)
        expect(video).toHaveProperty('id')

    })

    it('should error do not have a property', async () => {

        const videoMock: VideoDTO = {
            name: 'any_name',
            description: 'any_description',
            date: 100,
            sizeMegabytes: 100
        }

        const video = await registerVideo.register(videoMock)
        expect(video).toHaveProperty('date')

    })

})