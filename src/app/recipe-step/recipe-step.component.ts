import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'recipe-step',
    templateUrl: './recipe-step.component.html',
    styleUrls: ['./recipe-step.component.scss']
})
export class RecipeStepComponent implements OnInit {
    
    @Input() step : number;
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
}
