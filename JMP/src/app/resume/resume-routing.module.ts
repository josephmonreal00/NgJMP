import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';

const routes: Routes = [
    {
        path: 'resume',
        component: ResumeComponent
    }
]

@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        ResumeComponent
    ]
})
export class ResumeRoutingModule {}