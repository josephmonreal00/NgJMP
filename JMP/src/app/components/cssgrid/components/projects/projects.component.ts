import { Component, OnInit } from '@angular/core';
import * as ProjectsReducer from './state/projects.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'projects-component',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    public projectFeatureState!: Observable<ProjectsReducer.CssGridProjectsFeatureState>;
    public projects!: ProjectsReducer.ProjectInfo[];
    constructor(private store: Store<ProjectsReducer.CssGridProjectsFeatureState>) {
        this.store.select(ProjectsReducer.getCssGridProjectFeatureState).subscribe({
            next: s => console.log(s)
        });
        this.projectFeatureState = this.store.select(ProjectsReducer.getCssGridProjectFeatureState);
    }

    public ngOnInit(): void {
        this.projectFeatureState.subscribe({
            next: p => this.projects = p.projects
        })
    }
}