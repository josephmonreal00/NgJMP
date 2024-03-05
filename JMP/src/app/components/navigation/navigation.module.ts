import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { NavigationRoutingModule } from './navigation-routing.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [
        ButtonModule,
        NavigationRoutingModule
    ],
    exports: [
        NavigationComponent,
        NavigationRoutingModule
    ]
})
export class NavigationModule {

}