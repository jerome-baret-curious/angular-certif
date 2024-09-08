import {Component, EventEmitter, Input, Output} from "@angular/core";
import {LinkedDirective} from "../directive/linked.directive";

@Component(
  {
    standalone: true,
    templateUrl: './sub.component.html',
    imports: [
      LinkedDirective
    ],
    selector: 'jba-sub'
  })
export class SubComponent {
  @Input() value = 0;

  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

  temp = Math.floor(Math.random() * 100);

  onSizeClicked() {
    this.size = Math.round(Math.max(20, 30*Math.random()));
    this.sizeChange.emit(this.size);
  }
}
