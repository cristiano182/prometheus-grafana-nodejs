import { Router } from "express";
import { adapterRoute } from "../adapter/express-adapter";
import { makeRegisterVideoController } from "../factories/controller/register-video-controller";

const route = Router()


route.post('/video', adapterRoute(makeRegisterVideoController()))

export default route



