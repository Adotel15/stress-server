import { loadTest } from 'loadtest';

import type { LoadTestOptions, LoadTestResult } from 'loadtest';

import 'dotenv/config';

const options: LoadTestOptions = {
    url: process.env.STRESS_URL,
    method: process.env.METHOD,
    headers: {
        'Content-Type': 'application/json',
        Authorization: process.env.HEADER_TOKEN,
    },
    requestsPerSecond: 5,
    timeout: 30000,
    concurrency: 50,
    maxRequests: 10000,
};

console.log('Starting stress test...');
loadTest(options, (err: Error | null, results: LoadTestResult) => {
    if (err) console.log(err);
    results.show();
    console.log('Tests run successfully');
});
