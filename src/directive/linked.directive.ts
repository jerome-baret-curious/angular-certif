import {Directive, HostBinding, HostListener, Input, OnChanges} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[linked]',
})
export class LinkedDirective implements  OnChanges {

  @HostBinding('disabled') // is like [] for component
  dis!: boolean;

  @HostListener('click') // is like () for component
  ck() {
    console.log('clicked from linked')
  }

  @Input()
  temperature?: number

  constructor() {}

  ngOnChanges() {
    this.dis = this.temperature ? this.temperature < 50 : false;
  }
}
