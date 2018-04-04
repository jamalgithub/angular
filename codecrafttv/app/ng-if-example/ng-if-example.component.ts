import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  templateUrl: './ng-if-example.component.html',
  styleUrls: ['./ng-if-example.component.css']
})
export class NgIfExampleComponent {

    people: any[] = [
        {
            'name': 'Douglas  Pace',
            'age': 35
        },
        {
            'name': 'Mcleod  Mueller',
            'age': 32
        },
        {
            'name': 'Day  Meyers',
            'age': 21
        },
        {
            'name': 'Aguirre  Ellis',
            'age': 34
        },
        {
            'name': 'Cook  Tyson',
            'age': 32
        }
    ];

}
