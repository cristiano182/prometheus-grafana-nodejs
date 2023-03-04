import { RegisterVideoUsecase } from "../../../application/usecases/video/register-video"
import { VideoGatewayRedis } from "../../../infra/gateway/video/video"
import { RegisterVideoController } from "../../../presentation/controller/video/register-video"
import { IController } from "../../../presentation/interfaces/controller"

export const makeRegisterVideoController = (): IController => {
    const gatewayRedis  =  new VideoGatewayRedis()
    const registerVideoUsecase = new RegisterVideoUsecase(gatewayRedis)
    return new RegisterVideoController(registerVideoUsecase)
}