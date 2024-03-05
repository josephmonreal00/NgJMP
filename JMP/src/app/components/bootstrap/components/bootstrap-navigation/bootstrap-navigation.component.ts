import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'bootstrap-navigation',
    templateUrl: './bootstrap-navigation.component.html'
})
export class BootstrapNavigationComponent {
    constructor(private router: Router) { }

    public routeToProjects(): void {
        this.router.navigate(['/bootstrap/projects']);
    }
}