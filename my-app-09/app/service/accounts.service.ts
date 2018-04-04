import {EventEmitter, Injectable} from '@angular/core';

import {LoggingService} from './logging.service';
import {Account} from '../model/Account';

// @Injectable() to be added if we want to inject something in this service class
@Injectable()
export class AccountsService {
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];
    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingService) {
    }

    /**
     * Add a new account
     * @param {string} name
     * @param {string} status
     */
    addAccount0(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatusChange(status);
    }

    /**
     * Add a new account
     * @param {Account} account
     */
    addAccount(account: Account) {
        this.accounts.push(account);
        this.loggingService.logStatusChange(status);
    }

    /**
     * Update a status of the account accounts[id]
     * @param {number} id
     * @param {string} status
     */
    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}
