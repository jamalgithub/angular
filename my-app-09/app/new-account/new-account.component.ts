import {Component} from '@angular/core';
import {AccountsService} from '../service/accounts.service';
import {Account} from '../model/Account';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
    // Same instance of this service is available for the Component and all its child componentsn
    // providers: [LoggingService]
})
export class NewAccountComponent {

    constructor(private accountsService: AccountsService) {
        this.accountsService.statusUpdated.subscribe(
            (status: string) => alert('New Status: ' + status)
        );
    }

    /**
     * Create a new account
     * @param {string} accountName
     * @param {string} accountStatus
     */
    onCreateAccount0(accountName: string, accountStatus: string) {
        this.accountsService.addAccount0(accountName, accountStatus);
        // this.loggingService.logStatusChange(accountStatus);
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accountsService.addAccount(new Account(accountName, accountStatus));
        // this.loggingService.logStatusChange(accountStatus);
    }
}
