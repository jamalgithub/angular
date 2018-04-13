import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

    user: { id: number, name: string };
    paramsSubscription: Subscription;

    /**
     *
     * @param {ActivatedRoute} route The activatedRoute give us access to the params passed in the URL.<br>
     * The activatedRoute contains the information about a route associated with a component loaded
     * in an outlet at a particular moment in time.
     *
     */
    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.user = {
            id: this.route.snapshot.params['id'],
            name: this.route.snapshot.params['name']
        };

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

        // add a listener to the active route params
        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.user.id = params['id'];
                this.user.name = params['name'];
            }
        );
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }
}
