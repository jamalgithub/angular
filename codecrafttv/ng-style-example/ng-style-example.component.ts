import {Component} from '@angular/core';

@Component({
    selector: 'app-ng-style-example',
    templateUrl: './ng-style-example.component.html',
    styleUrls: ['./ng-style-example.component.css']
})
export class NgStyleExampleComponent {

    people: any[] = [
        {
            'name': 'Douglas  Pace',
            'country': 'UK'
        },
        {
            'name': 'Mcleod  Mueller',
            'country': 'USA'
        },
        {
            'name': 'Day  Meyers',
            'country': 'HK'
        },
        {
            'name': 'Aguirre  Ellis',
            'country': 'UK'
        },
        {
            'name': 'Cook  Tyson',
            'country': 'USA'
        }
    ];

    getColor(country) {
        switch (country) {
            case 'UK':
                return 'green';
            case 'USA':
                return 'blue';
            case 'HK':
                return 'red';
        }
    }

}
