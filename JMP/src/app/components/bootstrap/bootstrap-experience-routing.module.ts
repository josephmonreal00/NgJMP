import { NgModule } from '@angular/core';
import { BootstrapExperienceComponent } from './bootstrap-experience.component';
import { BootstrapNavigationComponent } from './components/bootstrap-navigation/bootstrap-navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapProjectsComponent } from './components/bootstrap-projects/bootstrap-projects.component';

const routes: Routes = [
    { path: 'bootstrap/projects', component: BootstrapProjectsComponent, pathMatch: 'full' }
]

@NgModule({
    declarations: [
        BootstrapProjectsComponent,
        BootstrapExperienceComponent,
        BootstrapNavigationComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: []
})
export class BootstrapExperienceRoutingModule {

}