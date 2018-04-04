import {
    AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, QueryList, ViewChild,
    ViewChildren
} from '@angular/core';
import {Joke} from '../shared/joke';
import {JokeComponent} from './joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements AfterViewInit, AfterContentInit {

    jokes: Joke[] = [
        new Joke('What did the cheese say when it looked in the mirror', 'Hello-me (Halloumi)'),
        new Joke('What kind of cheese do you use to disguise a small horse', 'Mask-a-pony (Mascarpone)')
    ];

    // View children of a component are the components and elements in this components view.
    // View children are only initialised by the time the AfterViewInit lifecycle phase has been run.
    @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
    @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
    // It’s not recommended to interact with the DOM directly with an ElementRef since that results in code
    // that’s not very portable.

    @ViewChild('header') headerEl: ElementRef;

    // Content children of a component are the components and elements that are projected into this components view
    // by a host component.
    // Content children are only initialised by the time the AfterContentInit lifecycle phase has been run.
    @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

    constructor() {
        console.log(`new - jokeViewChild is ${this.jokeViewChild}`);
        console.log(`new - jokeContentChild is ${this.jokeContentChild}`);
    }

    ngAfterViewInit(): void {
        console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);

        const jokes: JokeComponent[] = this.jokeViewChildren.toArray();
        console.log(jokes);

        console.log(`ngAfterViewInit - headerEl is ${this.headerEl}`);
        console.log(`ngAfterViewInit - headerEl is `, this.headerEl);
        //noinspection TypeScriptUnresolvedVariable
        // console.log(this.headerEl);
        this.headerEl.nativeElement.textContent = 'Best Joke Machine';
    }

    ngAfterContentInit(): void {
        console.log(`ngAfterContentInit - jokeContentChild is ${this.jokeContentChild}`);
        console.log(`ngAfterContentInit - jokeContentChild is `, this.jokeContentChild);
    }

    addJoke() {
        this.jokes.unshift(new Joke('What did the cheese say when it looked in the mirror', 'Hello-me (Halloumi)'));
    }

    deleteJoke() {
        this.jokes = [];
    }

}
