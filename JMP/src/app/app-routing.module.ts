import { NgModule } from '@angular/core';
import { SkillsModule } from './skills/skills.module';
import { ProjectsModule } from './projects/projects.module';
import { ResumeModule } from './resume/resume.module';
import { Routes } from '@angular/router';

const routes: Routes = [
    { path: 'projects', loadComponent: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
    { path: 'skills', loadComponent: () => import('./skills/skills.module').then(m => m.SkillsModule) },
    { path: 'resume', loadComponent: () => import('./resume/resume.module').then(m => m.ResumeModule) },
    { path: '', pathMatch: 'full', redirectTo: 'app' }
]

@NgModule({
    imports: [
        SkillsModule,
        ProjectsModule,
        ResumeModule
    ],
    exports: [
        SkillsModule,
        ProjectsModule,
        ResumeModule
    ]
})
export class AppRoutingModule {}