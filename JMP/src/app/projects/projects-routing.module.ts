import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
    { 
        path: '',
        component: ProjectsComponent
    }
]

@NgModule({
    declarations: [
        ProjectsComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        ProjectsComponent
    ]
})
export class ProjectsRoutingModule {}