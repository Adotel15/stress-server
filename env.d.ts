declare namespace NodeJS {
    interface ProcessEnv {
        STRESS_URL: string;
        METHOD: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
        HEADER_TOKEN: string;
        [key: string]: string | undefined;
    }
}
