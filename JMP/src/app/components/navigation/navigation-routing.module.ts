import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssGridExperienceComponent } from '../cssgrid/css-grid-experience.component';
import { BootstrapExperienceComponent } from '../bootstrap/bootstrap-experience.component';
import { PrimeNgExperienceModule } from '../prime_ngex/primeng-experience.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgExperienceComponent } from '../prime_ngex/primeng-experience.component';
import { MaterialExperienceComponent } from '../material/material-experience.component';
import { MaterialExperienceModule } from '../material/material-experience.module';
import { BootstrapExperienceModule } from '../bootstrap/bootstrap-experience.module';
import { CssGridExperienceModule } from '../cssgrid/css-grid-experience.module';


const routes: Routes = [
    {
        path: 'css-grid',
        component: CssGridExperienceComponent
    },
    {
        path: 'bootstrap',
        component: BootstrapExperienceComponent
    },
    {
        path: 'prime-ng',
        component: PrimeNgExperienceComponent
    },
    {
        path: 'material',
        component: MaterialExperienceComponent
    }
];

@NgModule({
    imports: [
        SharedModule,
        CssGridExperienceModule,
        MaterialExperienceModule,
        BootstrapExperienceModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class NavigationRoutingModule {

}