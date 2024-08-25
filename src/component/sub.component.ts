import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component(
  {
    standalone: true,
    templateUrl: './sub.component.html',
    selector: 'jba-sub'
  })
export class SubComponent {
  @Input() value = 0;

  @Input() size!: number;
  @Output() sizeChange = new EventEmitter<number>();

  onSizeClicked() {
    this.size = Math.round(Math.max(20, 30*Math.random()));
    this.sizeChange.emit(this.size);
  }
}
