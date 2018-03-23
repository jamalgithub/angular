import {Component} from '@angular/core';

@Component({
    selector: 'app-ng-for-example',
    templateUrl: './ng-for-example.component.html',
    styleUrls: ['./ng-for-example.component.css']
})
export class NgForExampleComponent {

    peopleByCountry: any[] = [
        {
            'country': 'UK',
            'people': [
                {
                    'name': 'Douglas  Pace'
                },
                {
                    'name': 'Mcleod  Mueller'
                },
            ]
        },
        {
            'country': 'US',
            'people': [
                {
                    'name': 'Day  Meyers'
                },
                {
                    'name': 'Aguirre  Ellis'
                },
                {
                    'name': 'Cook  Tyson'
                }
            ]
        }
    ];

}
