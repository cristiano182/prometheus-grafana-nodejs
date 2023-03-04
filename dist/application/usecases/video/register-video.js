"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterVideoUsecase = void 0;
class RegisterVideoUsecase {
    constructor(videoGateway) {
        this.videoGateway = videoGateway;
    }
    async register(video) {
        return this.videoGateway.register(video);
    }
}
exports.RegisterVideoUsecase = RegisterVideoUsecase;
//# sourceMappingURL=register-video.js.map