import { Router } from "express";
import { adapterRoute } from "../adapter/express-adapter";
import { makePrometheusController } from "../factories/controller/prometheus-metrics";

const route = Router()


route.get('/metrics',  adapterRoute(makePrometheusController()))

export default route



