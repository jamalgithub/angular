// import { Injectable } from '@angular/core';

// @Injectable() to be added if we want to inject something in this service class
// @Injectable()
export class LoggingService {

    /**
     * log a status in the console
     * @param {string} status
     */
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }

}
