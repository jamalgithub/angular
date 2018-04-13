import {Component, OnInit} from '@angular/core';

import {ServersService} from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from '@angular/router';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

    server: { id: number, name: string, status: string };

    /**
     *
     * @param {ServersService} serversService
     * @param {ActivatedRoute} route The activatedRoute give us access to the params passed in the URL.<br>
     * The activatedRoute contains the information about a route associated with a component loaded
     * in an outlet at a particular moment in time.
     * @param {Router} router
     */
    constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // // + to retreive id param as a number
        // const id = +this.route.snapshot.params['id'];
        // this.server = this.serversService.getServer(id);
        //
        // // add a listener to the route params
        // this.route.params.subscribe(
        //     (params: Params) => {
        //         this.server = this.serversService.getServer(+params['id']);
        //     }
        // );

        this.route.data.subscribe(
            (data: Data) => {
                this.server = data['server'];
            }
        );
    }

    onEdit() {
        // this.router.navigate(['/servers', this.server.id, 'edit']);
        // queryParamsHandling : config strategy to handle the query parameters for the next navigation.
        this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    }
}
