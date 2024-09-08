import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

export interface SelectTemplateContext<T> {
  $implicit: T;
}

@Directive({
  standalone: true,
  selector: '[select]',
})
export class SelectDirective<T> implements OnInit {

  @Input({required: true}) selectFrom!: string;

  constructor(private templateRef: TemplateRef<T>, private viewContainerRef: ViewContainerRef) {}

  static ngTemplateContextGuard<T>(dir: SelectDirective<T>, ctx: any): ctx is SelectTemplateContext<T> {
    return true;
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
