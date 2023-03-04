"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisHelper = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
class RedisHelper {
    static async getClient() {
        if (!this.redisClient) {
            this.redisClient = new ioredis_1.default({
                host: process.env.REDIS_HOST,
                port: Number(process.env.REDIS_PORT) || 6379,
                db: 0,
            });
        }
        return this.redisClient;
    }
}
exports.RedisHelper = RedisHelper;
//# sourceMappingURL=redis.js.map