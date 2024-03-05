import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SkillsComponent } from '../components/cssgrid/components/shared/skills/skills.component';

@NgModule({
    declarations: [
        SkillsComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        SkillsComponent
    ]
})
export class SharedModule { }