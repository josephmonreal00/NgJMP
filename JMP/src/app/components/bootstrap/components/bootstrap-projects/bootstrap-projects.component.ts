import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bootstrap-projects-component',
    templateUrl: './bootstrap-projects.component.html'
})
export class BootstrapProjectsComponent {
    constructor(private router: Router) { }

    public previousPage(): void {
        this.router.navigate(['bootstrap']);
    }
}