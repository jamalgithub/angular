import {
    AfterContentChecked,
    AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges, ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {ElementObject} from '../shared/element-object';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    // @Input('srvElement') element: { type: string, name: string, content: string };
    @Input('srvElement') element: ElementObject;
    @Input() name: string;
    @ViewChild('heading') header: ElementRef;
    @ContentChild('contentParagraph') paragraph: ElementRef;

    // This is invoked when Angular creates a component or directive by calling new on the class.
    constructor() {
        console.log('constructor called!');
    }

    // This is invoked every time there is a change in one of th input properties of the component.
    // is where we can find out details about which input properties have changed and how they have changed.
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called!');
        console.log(changes);
    }

    // This is invoked when given component has been initialized.
    // This hook is only called once after the first ngOnChanges.
    // The best place to initialise your components is in the ngOnInit lifecycle hook and not the constructor.
    ngOnInit() {
        console.log('ngOnInit called!');
        console.log('Text Content: ' + this.header.nativeElement.textContent);
        console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    // Invoked when the change detector of the given component is invoked.
    // It allows us to implement our own change detection algorithm for the given component.
    ngDoCheck() {
        console.log('ngDoCheck called!');
    }

    // This method will be invoked just before Angular destroys the component.
    // is where we place any cleanup logic for our component.
    ngOnDestroy() {
        console.log('ngOnDestroy called!');
    }

    // **************************************************************
    // ***********  Hooks for the components children  **************
    // **************************************************************
    // Invoked after Angular performs any content projection into the components view
    ngAfterContentInit() {
        console.log('ngAfterContentInit called!');
        console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    // Invoked each time the content of the given component has been checked by the change detection mechanism of Angular.
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked called!');
    }

    // Invoked when the component’s view has been fully initialized.
    ngAfterViewInit() {
        console.log('ngAfterViewInit called!');
        console.log('Text Content: ' + this.header.nativeElement.textContent);
        console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
    }

    // Invoked each time the view of the given component has been checked by the change detection mechanism of Angular.
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked called!');
    }
}
