"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const register_video_1 = require("./register-video");
const video_in_memory_1 = require("../../../infra/gateway/video/video-in-memory");
describe('RegisterVideoUsecase', () => {
    let videoGateway;
    let registerVideo;
    beforeAll(() => {
        videoGateway = new video_in_memory_1.VideoGatewayRedisInMemory();
        registerVideo = new register_video_1.RegisterVideoUsecase(videoGateway);
    });
    it('should be able to register a new video', async () => {
        const videoMock = {
            name: 'any_name',
            description: 'any_description',
            date: 100,
            sizeMegabytes: 100
        };
        const video = await registerVideo.register(videoMock);
        expect(video).toHaveProperty('id');
    });
    it('should error do not have a property', async () => {
        const videoMock = {
            name: 'any_name',
            description: 'any_description',
            date: 100,
            sizeMegabytes: 100
        };
        const video = await registerVideo.register(videoMock);
        expect(video).toHaveProperty('date');
    });
});
//# sourceMappingURL=register-video.spec.js.map