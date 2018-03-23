import { Component } from '@angular/core';

@Component({
    // selector: '[app-server]',
    // selector: '.app-server',
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;;
        }
    `]
})
export class ServerComponent {
    serverId = 10;
    serverStatus = 'offline';
    months = [
        'January', 'Feburary', 'March', 'April', 'May',
        'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];
    isAvailable = false;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    myClickFunction(event) {
        this.isAvailable = true;
        // just added console.log which will display the event details in browser on click of the button.
        alert('Button is clicked');
        console.log(event);
    }

    changemonths(event) {
        alert('Changed month from the Dropdown');
        console.log('Changed month from the Dropdown');
        console.log(event);
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
