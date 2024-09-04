import {Component} from "@angular/core";
import {HahaDivComponent} from "./haha-div.component";
import {DeuzService} from "../service/deuz.service";

@Component(
  {
    standalone: true,
    templateUrl: './simple-div.component.html',
    selector: 'jba-simple',
    imports: [
      HahaDivComponent
    ],
    // one instance of DeuzService per instance of SimpleDivComponent
    providers: [DeuzService]//usable also by components/directives used in the template, no tree-shake
  })
export class SimpleDivComponent {
}
