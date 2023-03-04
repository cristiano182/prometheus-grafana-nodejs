import { PrometheusHelper } from "../../../infra/prometheus";
import { IController } from "../../interfaces/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../../interfaces/http";



export class PrometheusController implements IController {
   async handle (request: HttpRequest): Promise<HttpResponse>{
    try {
        const prometheus = await PrometheusHelper.getClient()
       // response.setHeader('Content-Type', this.prometheus.register.contentType);
       const data = await prometheus.metrics()
        return ok(data)
    } catch (err: any) {
       return serverError(err)
    }
   }   
}