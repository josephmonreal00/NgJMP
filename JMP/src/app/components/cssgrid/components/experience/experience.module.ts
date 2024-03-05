import { NgModule } from '@angular/core';
import { ExperienceComponent } from './experience.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { cssGridExperienceReducer } from './state/experience.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
    declarations: [
        ExperienceComponent
    ],
    imports: [
        SharedModule,
        StoreModule.forFeature('cssGridExperienceFeatureSelector', cssGridExperienceReducer)
    ],
    exports: [
        ExperienceComponent
    ]
})
export class ExperienceModuleCssGrid {

}