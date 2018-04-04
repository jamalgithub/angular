import {Component, Input} from '@angular/core';
import {LoggingService} from '../service/logging.service';
import {AccountsService} from '../service/accounts.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    // Same instance of this service is available for the Component and all its child components
    // providers: [LoggingService]
})
export class AccountComponent {
    @Input() account: { name: string, status: string };
    @Input() id: number;

    constructor(private loggingService: LoggingService, private accountsService: AccountsService) {
    }

    /**
     * Update the status of this account
     * @param {string} status
     */
    onSetTo(status: string) {
        this.accountsService.updateStatus(this.id, status);
        // this.loggingService.logStatusChange(status);
        this.accountsService.statusUpdated.emit(status);
    }
}
