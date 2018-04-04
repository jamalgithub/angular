import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {CarouselItemComponent} from './carousel-item/carousel-item.component';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterContentInit {

    @ContentChildren(CarouselItemComponent) carouselItemsList: QueryList<CarouselItemComponent>;
    @Input() delay = 500;

    constructor() {
    }

    ngAfterContentInit(): void {
        const carouselItems = this.carouselItemsList.toArray();
        let count = 0;
        const max = carouselItems.length;
        setInterval(
            () => {
                const i = count % max;
                carouselItems.forEach((item) => item.isActive = false);
                carouselItems[i].isActive = true;
                count += 1;
            },
            this.delay
        );
    }
}
