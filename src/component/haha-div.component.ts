import {Component} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component(
  {
    templateUrl: './haha-div.component.html',
    selector: 'jba-haha',
    imports: [
    NgTemplateOutlet
]
})
export class HahaDivComponent {
  condi = true;
}
