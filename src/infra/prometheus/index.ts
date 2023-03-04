import client, { Registry } from "prom-client"



export class PrometheusHelper {
    static prometheusClient: any;
  
    static async getClient(): Promise<any> {
      if (!this.prometheusClient) {
        this.prometheusClient = new client.Registry();
        const defaultConfig = {
            app: 'node-application-monitoring-app',
            prefix: 'node_',
            timeout: 10000,
            gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
           register: this.prometheusClient
           
        }
        client.collectDefaultMetrics(defaultConfig);
      }
  
      return this.prometheusClient
    }
  }






