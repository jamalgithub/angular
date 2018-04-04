import {Directive, HostBinding, HostListener, Input, OnChanges} from '@angular/core';

@Directive({
  // selector: '[appRolloverImage]'
    selector: 'img[ccRollover]'
})
export class RolloverImageDirective implements OnChanges {

    @Input('ccRollover') config: Object = {
        'initial': 'https://unsplash.it/200/300?image=201',
        'over': ''
    };

    @HostBinding('src') private imagePath: string;

    ngOnChanges() {
        if (this.config.initial) {
            this.imagePath = this.config.initial;
        }
    }

    @HostListener('mouseover') onMouseOver() {
        this.imagePath = this.config.over;
    }

    @HostListener('mouseout') onMouseOut() {
        this.imagePath = this.config.initial;
    }

}
