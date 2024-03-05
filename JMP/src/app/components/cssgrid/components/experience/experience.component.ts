import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ExperienceNgRx from './state/experience.reducer';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'experience-component',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
    public experiences!: Observable<Array<ExperienceNgRx.Experience>>;

    constructor(
        private store: Store<ExperienceNgRx.Experience>
    ) { }

    public ngOnInit(): void {
        this.store.select(ExperienceNgRx.getCssGridExperienceFeatureState).subscribe({
            next: exp => this.experiences = of(exp.experiences)
        });
    }
}