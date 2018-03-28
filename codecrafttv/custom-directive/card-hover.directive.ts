import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCardHover]'
  // selector: '.appCardHover'
})
export class CardHoverDirective implements OnInit {

    private possibleColors = [
        'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
        'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
    ];

    // make our directive configurable
    // we bind to this input in the template
    @Input('ccCardHover') config = {
        querySelector: '.card-text'
    };

    // @HostBinding lets you set an input properties on the element or component that hosts the directive
    // we pass to @HostBinding the path to the property we want to bind on the host element
    @HostBinding('class.text-primary')
    private ishovering: boolean;

    @HostBinding('style.border')
    borderColor: string;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        // renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
    }

    ngOnInit(): void {
        this.borderColor = '1px solid #ccc';
    }

    // @HostListener lets you listen for an output events on the host element or component.
    // we pass to the @HostListener the name of the event we want to listen for
    @HostListener('mouseover')
    onMouseOver() {
        // window.alert('hover');
        const colorPick = Math.floor(Math.random() * this.possibleColors.length);
        const part = this.el.nativeElement.querySelector(this.config.querySelector);

        this.borderColor = '1px solid ' + this.possibleColors[colorPick];
        this.renderer.setStyle(part, 'display', 'block');
        this.ishovering = true;
    }

    @HostListener('mouseout')
    onMouseOut() {
        const part = this.el.nativeElement.querySelector(this.config.querySelector);

        this.borderColor = '1px solid #ccc';
        this.renderer.setStyle(part, 'display', 'none');
        this.ishovering = false;
    }
}
