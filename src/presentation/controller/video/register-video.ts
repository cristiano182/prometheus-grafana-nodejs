import { RegisterVideoUsecase } from "../../../application/usecases/video/register-video";
import { IController } from "../../interfaces/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../../interfaces/http";



export class RegisterVideoController implements IController {
    constructor(private readonly registerVideoUsecase: RegisterVideoUsecase ) {}
   async handle (request: HttpRequest): Promise<HttpResponse>{
    try {
        const video = request.body
        const response   = await this.registerVideoUsecase.register(video)
        return ok(response)
    
    } catch (err: any) {
       return serverError(err)
    }
   }   
}