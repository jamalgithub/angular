import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

    server: { id: number, name: string, status: string };
    serverName = '';
    serverStatus = '';
    allowEdit = false;
    chageSaved = false;

    /**
     *
     * @param {ServersService} serversService
     * @param {ActivatedRoute} route The activatedRoute give us access to the params passed in the URL.<br>
     * The activatedRoute contains the information about a route associated with a component loaded
     * in an outlet at a particular moment in time.
     */
    constructor(private serversService: ServersService, private route: ActivatedRoute, private  router: Router) {
    }

    ngOnInit() {
        // the snapshot represent the route at the first load of the component.
        // the snapshot won’t get updated if we try to reload the current route with different route parameters
        // These values will be calculated for the first load of the component
        // and they won’t change unless you reload the page.
        console.log('queryParams :', this.route.snapshot.queryParams);
        console.log('routeParams :', this.route.snapshot.params);
        console.log('fragment :', this.route.snapshot.fragment);

        // Active route also provides the query and route parameters in the form of observables.
        // We can subscribe to those observables and thus whenever the route params might get changed,
        // we will get notified in our subscriber and so we can load the user details.

        // add a listener to the active route query params
        this.route.queryParams.subscribe(
            (queryParams: Params) => {
                this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
            }
        );
        this.route.fragment.subscribe();
        const id = +this.route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
        // Subscribe route params to update the id if params change
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
        this.chageSaved = true;
        this.router.navigate(['../'], {retlativeTo: this.route});
    }

    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.allowEdit) {
            return true;
        }
        if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.chageSaved) {
            return confirm('Do you want to discard the changes?');
        } else {
            return true;
        }
    }
}
