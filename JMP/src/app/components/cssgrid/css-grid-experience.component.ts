import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'css-grid-experience',
    templateUrl: './css-grid-experience.component.html',
    styleUrls: [
        './css-grid-sm-experience.component.scss',
        './css-grid-lg-experience.component.scss'
    ]
})
export class CssGridExperienceComponent implements OnInit {
    protected urlSegment: string = "";
    protected match_about: string = URLS.ABOUT;
    protected match_contact: string = URLS.CONTACT;
    protected match_experience: string = URLS.EXPERIENCE;
    protected match_projects: string = URLS.PROJECTS;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
    }

    public ngOnInit(): void {
        let snapshot = this.activatedRoute.snapshot;
        let url = snapshot.url;

        if (url != undefined) {
            if (url[0] != undefined) {
                this.urlSegment += url[0].path;
            }

            if (url[1] != undefined) {
                this.urlSegment += `/${url[1].path}`;
            }
        }
    }

    public routeTo(page: string): void {
        this.router.navigate([`css-grid/${page}`]);
    }
}

export enum URLS {
    ABOUT = "css-grid/about",
    CONTACT = "css-grid/contact",
    EXPERIENCE = "css-grid/experience",
    PROJECTS = "css-grid/projects"
}