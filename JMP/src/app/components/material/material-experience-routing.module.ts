import { NgModule } from '@angular/core';
import { MaterialExperienceComponent } from './material-experience.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MaterialNavigationComponent } from './components/material-navigation/material-navigation.component';

@NgModule({
    declarations: [
        MaterialNavigationComponent,
        MaterialExperienceComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatBadgeModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatSlideToggleModule,
        MaterialExperienceComponent,
        MaterialNavigationComponent
    ]
})
export class MaterialExperienceRoutingModule {

}