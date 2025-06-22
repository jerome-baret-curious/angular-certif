import {Component} from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component(
  {
    templateUrl: './loop.component.html',
    selector: 'jba-loop',
    imports: []
})
export class LoopComponent {
  metals = ['Gold', 'Iron', 'Platinum', 'Silver',' Bronze']

  suivi(index: number, item: string): string {
    return item;
  }
}
