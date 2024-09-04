import {Component} from "@angular/core";
import {NgIf, NgTemplateOutlet} from "@angular/common";

@Component(
  {
    standalone: true,
    templateUrl: './haha-div.component.html',
    selector: 'jba-haha',
    imports: [
      NgIf,
      NgTemplateOutlet
    ]
  })
export class HahaDivComponent {
  condi = true;
}
