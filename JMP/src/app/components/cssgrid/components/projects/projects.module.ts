import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { cssGridProjectsReducer } from './state/projects.reducer';

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        StoreModule.forFeature('cssGridProjectsFeatureSelector', cssGridProjectsReducer)
    ],
    exports: [
        ProjectsComponent,
        SharedModule
    ]
})
export class ProjectsModuleCssGrid {

}