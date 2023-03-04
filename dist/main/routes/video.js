"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_adapter_1 = require("../adapter/express-adapter");
const register_video_controller_1 = require("../factories/controller/register-video-controller");
const route = (0, express_1.Router)();
route.post('/video', (0, express_adapter_1.adapterRoute)((0, register_video_controller_1.makeRegisterVideoController)()));
exports.default = route;
//# sourceMappingURL=video.js.map