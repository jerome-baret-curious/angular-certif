import {Component, HostBinding, HostListener, ViewEncapsulation} from "@angular/core";

@Component(
  {
    standalone: true,
    templateUrl: './custom-native-button.component.html',
    selector: 'button[mon-bouton]',
    styleUrls: ['./custom-native-button.component.css']
  })
export class CustomNativeButtonComponent {
  @HostBinding('class.vert') get v() { return this.vert; } // pas obligatoirement un getter
  @HostBinding('class.bleu') get b() { return !this.vert; }

  @HostBinding('class.front') get f1() {
    if (this.frontValue > 0.6) return true;
    if (this.frontValue < 0.4) return false;
    return undefined;// let other bindings to the same class decide
  }
  @HostBinding('class.front') get f2() {
    if (this.frontValue > 0.5) return undefined;
    return true;
  }

  @HostListener('click', ['$event'])
  onClick(evt: unknown) {
    this.vert = Math.random() > 0.5;
    this.frontValue = Math.random();
  }

  vert = true;
  frontValue = 0;
}
