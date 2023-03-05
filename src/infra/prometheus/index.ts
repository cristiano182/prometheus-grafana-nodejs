import client, { Histogram, Registry } from "prom-client"


export class PrometheusHelper {
    static prometheusClient: any;
    static promClient: any
  
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
        this.prometheusClient.collectDefaultMetrics(defaultConfig);
        this.prometheusClient.setDefaultLabels({
            app: 'monitoring-article',
          });

      }
  
      return this.prometheusClient
    }

    static async prometheusHistogram(): Promise<Histogram>{
      const httpRequest = new client.Histogram({
        name: 'http_request_duration_ms',
        help: 'Duration of HTTP requests in ms',
        labelNames: ['method', 'route', 'code'],
        // buckets for response time from 0.1ms to 1s
        buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500, 1000],
      });
      //register.registerMetric(httpRequestDurationMicroseconds)

      return httpRequest
      
  }


}





