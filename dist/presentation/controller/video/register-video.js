"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterVideoController = void 0;
const http_1 = require("../../interfaces/http");
class RegisterVideoController {
    constructor(registerVideoUsecase) {
        this.registerVideoUsecase = registerVideoUsecase;
    }
    async handle(request) {
        try {
            const video = request.body;
            const response = await this.registerVideoUsecase.register(video);
            return (0, http_1.ok)(response);
        }
        catch (err) {
            return (0, http_1.serverError)(err);
        }
    }
}
exports.RegisterVideoController = RegisterVideoController;
//# sourceMappingURL=register-video.js.map