"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrometheusController = void 0;
const prometheus_1 = require("../../../infra/prometheus");
const http_1 = require("../../interfaces/http");
class PrometheusController {
    async handle(request) {
        try {
            const prometheus = await prometheus_1.PrometheusHelper.getClient();
            return (0, http_1.ok)({});
        }
        catch (err) {
            return (0, http_1.serverError)(err);
        }
    }
}
exports.PrometheusController = PrometheusController;
//# sourceMappingURL=metrics.js.map