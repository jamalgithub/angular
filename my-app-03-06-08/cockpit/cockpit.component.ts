import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ServerObject} from '../shared/server-object';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    // @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output() serverCreated = new EventEmitter<ServerObject>();
    // @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<ServerObject>();
    // newServerName = '';
    // newServerContent = '';
    @ViewChild('serverContentInput') serverContentInput: ElementRef;

    constructor() {
    }

    ngOnInit() {
    }

    onAddServer(nameInput: HTMLInputElement) {
        // console.log(nameInput);
        // this.serverCreated.emit(
        //     // {
        //     //     serverName: this.newServerName,
        //     //     serverContent: this.newServerContent
        //     // }
        //     new ServerObject(nameInput.value, this.newServerContent)
        // );

        // console.log(this.serverContentInput);
        this.serverCreated.emit(
            // {
            //     serverName: nameInput.value,
            //     serverContent: this.serverContentInput.nativeElement.value
            // }
            new ServerObject(nameInput.value, this.serverContentInput.nativeElement.value)
        );
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        // this.blueprintCreated.emit(
        //     // {
        //     //     serverName: nameInput.value,
        //     //     serverContent: this.newServerContent
        //     // }
        //     new ServerObject(nameInput.value, this.newServerContent)
        // );

        this.blueprintCreated.emit(
            // {
            //     serverName: nameInput.value,
            //     serverContent: this.serverContentInput.nativeElement.value
            // }
            new ServerObject(nameInput.value, this.serverContentInput.nativeElement.value)
        );
    }
}
