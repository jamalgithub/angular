import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AccountComponent} from './account/account.component';
import {NewAccountComponent} from './new-account/new-account.component';
import { LoggingService } from './service/logging.service';
import { AccountsService } from './service/accounts.service';

@NgModule({
    declarations: [
        AppComponent,
        AccountComponent,
        NewAccountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    // Same instance of these services is available Application-wide
    providers: [LoggingService, AccountsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
