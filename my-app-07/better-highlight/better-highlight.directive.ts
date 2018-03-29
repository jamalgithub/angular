import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    @Input()
    defaultColor = 'transparent';

    // @Input('ccBetterHighlight')
    @Input('appBetterHighlight')
    highlightColor = 'blue';

    // @HostBinding('style.backgroundColor')
    @HostBinding('style.background-color')
    backgroundColor: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        this.backgroundColor = this.defaultColor;
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
        // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue', false, false);
    }

    @HostListener('mouseenter')
    mouseover(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue', false, false);
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave')
    mouseleave(eventData: Event) {
        // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', false, false);
        this.backgroundColor = this.defaultColor;
    }
}
