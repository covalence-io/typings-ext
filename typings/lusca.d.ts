import { cspOptions } from 'lusca';

declare module 'lusca' {
    interface cspOptions {
        nonce: string|number;
    }
}