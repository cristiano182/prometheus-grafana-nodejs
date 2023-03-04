"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRegisterVideoController = void 0;
const register_video_1 = require("../../../application/usecases/video/register-video");
const video_1 = require("../../../infra/gateway/video/video");
const register_video_2 = require("../../../presentation/controller/video/register-video");
const makeRegisterVideoController = () => {
    const gatewayRedis = new video_1.VideoGatewayRedis();
    const registerVideoUsecase = new register_video_1.RegisterVideoUsecase(gatewayRedis);
    return new register_video_2.RegisterVideoController(registerVideoUsecase);
};
exports.makeRegisterVideoController = makeRegisterVideoController;
//# sourceMappingURL=register-video-controller.js.map