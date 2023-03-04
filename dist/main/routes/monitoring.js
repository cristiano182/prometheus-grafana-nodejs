"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_adapter_1 = require("../adapter/express-adapter");
const prometheus_metrics_1 = require("../factories/controller/prometheus-metrics");
const route = (0, express_1.Router)();
route.get('/metrics', (0, express_adapter_1.adapterRoute)((0, prometheus_metrics_1.makePrometheusController)()));
exports.default = route;
//# sourceMappingURL=monitoring.js.map