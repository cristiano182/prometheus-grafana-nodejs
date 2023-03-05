import { RegisterVideoUsecase } from "../../../application/usecases/video/register-video";
import { IController } from "../../interfaces/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../../interfaces/http";
import { PrometheusHelper } from "../../../infra/prometheus";

export class RegisterVideoController implements IController {
    constructor(private readonly registerVideoUsecase: RegisterVideoUsecase ) {}
   async handle (request: HttpRequest): Promise<HttpResponse>{
    const start = Date.now();
    try {
        const video = request.body
        const response   = await this.registerVideoUsecase.register(video)
        return ok(response)
    
    } catch (err: any) {
       return serverError(err)
    } finally {
        const httpRequestTimer = await PrometheusHelper.prometheusHistogram()
        const responseTimeInMs = Date.now() - start;
     //   httpRequestTimer.labels(request.method, request.route.path, request.statusCode.toString()).observe(responseTimeInMs);
    }
   
   }   
}