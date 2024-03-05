import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationModule } from './components/navigation/navigation.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        NavigationModule,
        SharedModule
    ],
    exports: [
        BrowserModule,
        NavigationModule,
        RouterModule,
        SharedModule
    ]
})
export class AppRoutingModule { }