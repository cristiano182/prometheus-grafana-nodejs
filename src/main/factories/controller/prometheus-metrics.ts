import { PrometheusController } from "../../../presentation/controller/monitoring/metrics"
import { IController } from "../../../presentation/interfaces/controller"

export const makePrometheusController =  (): IController => {
    return new PrometheusController()
}