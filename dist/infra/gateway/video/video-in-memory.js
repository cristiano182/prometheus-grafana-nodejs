"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoGatewayRedisInMemory = void 0;
const crypto_1 = require("crypto");
class VideoGatewayRedisInMemory {
    async register(video) {
        const generatedUUID = (0, crypto_1.randomUUID)();
        const newProduct = {
            id: generatedUUID,
            ...video,
        };
        return newProduct;
    }
    async search(id) {
        return [];
    }
}
exports.VideoGatewayRedisInMemory = VideoGatewayRedisInMemory;
//# sourceMappingURL=video-in-memory.js.map