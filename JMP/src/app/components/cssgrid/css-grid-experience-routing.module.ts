import { NgModule } from '@angular/core';
import { CssGridExperienceComponent } from './css-grid-experience.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectsModuleCssGrid } from './components/projects/projects.module';
import { AboutModuleCssGrid } from './components/about/about.module';
import { ContactModuleCssGrid } from './components/contact/contact.module';
import { ExperienceModuleCssGrid } from './components/experience/experience.module';


const routes: Routes = [
    { path: 'css-grid/projects', component: CssGridExperienceComponent },
    { path: 'css-grid/about', component: CssGridExperienceComponent },
    { path: 'css-grid/contact', component: CssGridExperienceComponent },
    { path: 'css-grid/experience', component: CssGridExperienceComponent },
]

@NgModule({
    declarations: [
        CssGridExperienceComponent
    ],
    imports: [
        SharedModule,
        AboutModuleCssGrid,
        ContactModuleCssGrid,
        ExperienceModuleCssGrid,
        ProjectsModuleCssGrid,
        RouterModule.forChild(routes)
    ],
    exports: [
        CssGridExperienceComponent,
        AboutModuleCssGrid,
        ContactModuleCssGrid,
        ExperienceModuleCssGrid,
        ProjectsModuleCssGrid,
        RouterModule
    ]
})
export class CssGridExperienceRoutingModule {

}