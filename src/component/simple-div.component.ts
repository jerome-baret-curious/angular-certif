import {Component} from "@angular/core";
import {HahaDivComponent} from "./haha-div.component";
import {DeuzService} from "../service/deuz.service";
import {NgClass} from "@angular/common";

@Component(
  {
    standalone: true,
    templateUrl: './simple-div.component.html',
    styleUrl: './simple-div.component.css',
    selector: 'jba-simple',
    imports: [
      HahaDivComponent,
      NgClass
    ],
    // one instance of DeuzService per instance of SimpleDivComponent
    providers: [DeuzService]//usable also by components/directives used in the template, no tree-shake
  })
export class SimpleDivComponent {
  hey = 'hey';
}
