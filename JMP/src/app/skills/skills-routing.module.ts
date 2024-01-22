import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills.component';

const routes: Routes = [
    {
        path: 'skills',
        component: SkillsComponent
    }
]

@NgModule({
    declarations: [
        SkillsComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        SkillsComponent
    ]
})
export class SkillsRoutingModule {}