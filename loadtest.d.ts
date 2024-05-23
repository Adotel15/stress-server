declare module 'loadtest' {
    export interface LoadTestOptions {
        url: string;
        concurrency?: number;
        maxRequests?: number;
        maxSeconds?: number;
        method?: string;
        headers?: { [key: string]: string };
        body?: string;
        contentType?: string;
        agentKeepAlive?: boolean;
        requestsPerSecond?: number;
        indexParam?: string;
        secureProtocol?: string;
        [key: string]: any;
    }

    export interface LoadTestResult {
        totalRequests: number;
        totalErrors: number;
        totalTimeSeconds: number;
        rps: number;
        meanLatencyMs: number;
        maxLatencyMs: number;
        minLatencyMs: number;
        [key: string]: any;
    }

    export const loadTest: (
        options: LoadTestOptions,
        callback: (error: Error | null, result: LoadTestResult) => void
    ) => void;
}
