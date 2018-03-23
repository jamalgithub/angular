import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  templateUrl: './ng-class-example.component.html',
  styleUrls: ['./ng-class-example.component.css']
})
export class NgClassExampleComponent {

    people: any[] = [
        {
            'name': 'Douglas  Pace',
            'age': 35,
            'country': 'MARS'
        },
        {
            'name': 'Mcleod  Mueller',
            'age': 32,
            'country': 'USA'
        },
        {
            'name': 'Day  Meyers',
            'age': 21,
            'country': 'HK'
        },
        {
            'name': 'Aguirre  Ellis',
            'age': 34,
            'country': 'UK'
        },
        {
            'name': 'Cook  Tyson',
            'age': 32,
            'country': 'USA'
        }
    ];

}
