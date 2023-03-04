"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrometheusHelper = void 0;
const prom_client_1 = __importDefault(require("prom-client"));
class PrometheusHelper {
    static async getClient() {
        if (!this.prometheusClient) {
            this.prometheusClient = new prom_client_1.default.Registry();
            const defaultConfig = {
                app: 'node-application-monitoring-app',
                prefix: 'node_',
                timeout: 10000,
                gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
                register: this.prometheusClient
            };
            prom_client_1.default.collectDefaultMetrics(defaultConfig);
        }
        return this.prometheusClient.register;
    }
}
exports.PrometheusHelper = PrometheusHelper;
//# sourceMappingURL=index.js.map