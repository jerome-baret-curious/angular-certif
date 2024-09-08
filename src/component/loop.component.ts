import {Component} from "@angular/core";
import {NgForOf, NgIf, NgTemplateOutlet} from "@angular/common";

@Component(
  {
    standalone: true,
    templateUrl: './loop.component.html',
    selector: 'jba-loop',
    imports: [
      NgForOf
    ]
  })
export class LoopComponent {
  metals = ['Gold', 'Iron', 'Platinum', 'Silver',' Bronze']

  suivi(index: number, item: string): string {
    return item;
  }
}
