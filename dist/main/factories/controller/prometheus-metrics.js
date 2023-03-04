"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePrometheusController = void 0;
const metrics_1 = require("../../../presentation/controller/monitoring/metrics");
const makePrometheusController = () => {
    return new metrics_1.PrometheusController();
};
exports.makePrometheusController = makePrometheusController;
//# sourceMappingURL=prometheus-metrics.js.map