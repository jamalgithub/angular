import { NgModule } from '@angular/core';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuardService} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolverService} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
        { path: ':id/:name', component: UserComponent }
    ] },
    {
        path: 'servers',
        // canActivate: [AuthGuardService],
        canActivateChild: [AuthGuardService],
        component: ServersComponent,
        children: [
            // resolver is an intermediate code, which can be executed when a link has been clicked and before a component is loaded
            // the ServerComponent is loaded after resolving this route.
            // the result of the resolver will be added to data and will be accessed as data['server'] in our case
            { path: ':id', component: ServerComponent, resolver: {server: ServerResolverService} },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] }
        ]
    },
    // { path: 'not-found', component: PageNotFoundComponent },
    { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)// makes the router available everywhere in your app
        // RouterModule.forRoot(appRoutes, {useHash: true})// makes the router available everywhere in your app
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
