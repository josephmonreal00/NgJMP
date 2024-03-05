import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { PrimeNgExperienceComponent } from "./primeng-experience.component";
import { PrimeNgNavigationComponent } from "./components/primeng-navigation/primgng-navigation.component";

@NgModule({
    declarations: [
        PrimeNgNavigationComponent,
        PrimeNgExperienceComponent
    ],
    imports: [
        ButtonModule
    ],
    exports: [
        PrimeNgNavigationComponent,
        PrimeNgExperienceComponent,
        ButtonModule
    ]
})
export class PrimeNgExperienceRoutingModule {

}