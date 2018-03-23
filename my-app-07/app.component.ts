import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // By default styles for our components are encapsulated
    styleUrls: ['./app.component.css']
    // encapsulation: ViewEncapsulation.Emulated
    // encapsulation: ViewEncapsulation.Native
    // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    // numbers = [1, 2, 3, 4, 5];
    oddNumbers = [1, 3, 5];
    evenNumbers = [2, 4];
    onlyOdd = false;
    value = 5;
}
