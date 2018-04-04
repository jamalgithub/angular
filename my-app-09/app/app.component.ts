import {Component, OnInit} from '@angular/core';
import {AccountsService} from './service/accounts.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // By default styles for our components are encapsulated
    styleUrls: ['./app.component.css']
    // encapsulation: ViewEncapsulation.Emulated
    // encapsulation: ViewEncapsulation.Native
    // encapsulation: ViewEncapsulation.None

    // Same instance of these services is available for all Components, but not for other services
    // providers: [LoggingService, AccountsService]
})
export class AppComponent implements OnInit {
    accounts: {name: string, status: string}[] = [];

    constructor(private accountsService: AccountsService) {}

    ngOnInit() {
        this.accounts = this.accountsService.accounts;
    }
}
