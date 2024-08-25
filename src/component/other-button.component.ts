import {Component} from "@angular/core";

@Component(
  {
    standalone: true,
    templateUrl: './other-button.component.html',
    selector: 'jba-bouton',
    styleUrls: ['./other-button.component.css'],
  })
export class OtherButtonComponent {
  recClass : Record<string, boolean> = {
    rouge: true,
  };
  contenu = 'Autre bouton';
  width = 200;
  cache = false;
  actionName = 'attribute binding, Angular calls setAttribute';
  // colspan is attribute, colSpan is property

  // click is target event name, onAppui() is template statement
  onAppui(): void {
    // recClass identity must change
    this.recClass = {
      rouge: !this.recClass['rouge'],
    }
    this.cache = !this.cache;
    setTimeout(()=>{this.cache = false}, 1000);
  }
}
