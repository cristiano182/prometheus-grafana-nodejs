"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./config/app"));
const env_1 = __importDefault(require("./config/env"));
app_1.default.listen(env_1.default.port, () => { console.log('app running'); });
//# sourceMappingURL=index.js.map