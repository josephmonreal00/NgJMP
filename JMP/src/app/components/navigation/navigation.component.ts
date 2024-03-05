import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ToggleView } from 'src/app/shared/enums/toggle-view.enum';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation-component',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnChanges {

    @Input()
    public toggleViewSelected: ToggleView = ToggleView.GRID;

    constructor(private router: Router) { }

    public ngOnChanges(changes: SimpleChanges): void {
        let currentValue;

        if (changes != null && changes != undefined) {
            currentValue = changes['toggleViewSelected']?.currentValue;
        }

        switch (currentValue) {
            case 1:
                this.router.navigate(['css-grid']);
                break;
            case 2:
                this.router.navigate(['bootstrap']);
                break;
            case 3:
                this.router.navigate(['prime-ng']);
                break;
            case 4:
                this.router.navigate(['material']);
                break;
            default:
                this.router.navigate(['css-grid']);
                break;
        }
    }

    public ngOnInit(): void { }
}