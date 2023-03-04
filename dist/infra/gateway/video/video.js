"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoGatewayRedis = void 0;
const crypto_1 = require("crypto");
const redis_1 = require("../../database/redis");
class VideoGatewayRedis {
    async register(video) {
        const redisClient = await redis_1.RedisHelper.getClient();
        const generatedUUID = (0, crypto_1.randomUUID)();
        const newProduct = {
            id: generatedUUID,
            ...video,
        };
        await redisClient.set(generatedUUID, JSON.stringify(newProduct));
        const data = await redisClient.get(generatedUUID);
        return data;
    }
    async search(id) {
        return [];
    }
}
exports.VideoGatewayRedis = VideoGatewayRedis;
//# sourceMappingURL=video.js.map