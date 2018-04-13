import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit() {
    }

    onLoadServer(id: number) {
        // http://localhost:4200/servers/1/edit?allowEdit=1#loading
        this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});

        // http://localhost:4200/servers?param1=value1&param2=value2
        // this.router.navigate(['/servers'], { queryParams: { param1: 'value1', 'param2': 'value2' } });

        // this.router.navigate(['/servers']).then(
        //     nav => {
        //         // true if navigation is successful
        //         console.log(nav);
        //     },
        //     err => {
        //         // when there's an error
        //         console.log(err);
        //     }
        // );
    }

    onLogin() {
        this.authService.login();
    }

    onLogout() {
        this.authService.logout();
    }
}
