import {Component} from "@angular/core";
import {HahaDivComponent} from "./haha-div.component";

@Component(
  {
    standalone: true,
    templateUrl: './simple-div.component.html',
    selector: 'jba-simple',
    imports: [
      HahaDivComponent
    ]
  })
export class SimpleDivComponent {
}
