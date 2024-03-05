import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'skills-component',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    @Input()
    public skillName!: string;
    @Input()
    public yearStarted!: number;
    @Input()
    public yearsToDate!: number;
    @Input()
    public yearsTotal!: number;

    public yearBlocks: Array<Block> = new Array<Block>();

    public ngOnInit(): void {
        for (let i = 0; i < this.yearsTotal; i++) {
            if (i <= this.yearsToDate) {
                this.yearBlocks.push({ year: this.yearStarted++, filledIn: true, class: "acquired" })
            }
            else {
                this.yearBlocks.push({ year: this.yearStarted++, filledIn: false, class: "not-acquired" });
            }
        }
    }
}

export interface Block {
    year: number;
    filledIn: boolean;
    class: string;
}