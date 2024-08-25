import {
  AfterContentChecked, AfterContentInit,
  afterRender, AfterViewChecked, AfterViewInit,
  Component, ContentChild, ContentChildren, DoCheck,
  ElementRef, Input,
  OnChanges,
  OnDestroy,
  OnInit, QueryList,
  signal,
  SimpleChanges, viewChild,
  ViewChild
} from "@angular/core";
import {SubComponent} from "./sub.component";
import {toObservable} from "@angular/core/rxjs-interop";
import {AsyncPipe} from "@angular/common";
import {SimpleDivComponent} from "./simple-div.component";
import {HahaDivComponent} from "./haha-div.component";

@Component(
  {
    standalone: true,
    templateUrl: './bigger.component.html',
    imports: [
      SubComponent,
      AsyncPipe
    ],
    selector: 'jba-bigger'
  })
export class BiggerComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit {
  @Input() titre!: string;
  // read option of *Child* is the return, its default depends on the selector
  txtAreaSig = viewChild<ElementRef>("leText"); //.required to remove undefined
  // depends if ngif
  @ViewChild("leText") txtArea!: ElementRef<HTMLTextAreaElement>;// view always traverse descendants
  @ViewChild("leText", {static: true}) txtAreaStatic!: ElementRef<HTMLTextAreaElement>;// static not for *Children
  @ContentChild(SimpleDivComponent) simpleDiv!: SimpleDivComponent;// look inside ng-content
  @ContentChildren(SimpleDivComponent) simpleDivList!: QueryList<SimpleDivComponent>;//find direct child, use {descendants: true} for indirect
  @ContentChild(HahaDivComponent) hahaDiv!: HahaDivComponent;
  // CSS selectors aren't supported

  // "view" is own template
  // "content" what's inside the component where this component is used

  uptSig = signal(0);
  uptSig$ = toObservable(this.uptSig);
  customers = [{name:'aa'},{name:'bb'}]
  customer = 'Ducomposant'

  valueForSub = 5;

  sizeOfSub = 4;

  constructor() {
    console.log(1)
    // must be called in injection context
    afterRender(() => {
      console.log('ta width:',this.txtArea.nativeElement.scrollWidth);
    });
  }

  onSizeOfSubClick() {
    this.sizeOfSub = Math.round(10*Math.random());
    this.uptSig.update(value => (value + 1)%10);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if changes
    console.log(2, changes)
  }

  ngOnInit(): void {
    console.log("init 3", this.txtAreaStatic)
  }

  ngDoCheck(): void {
    console.log("check 4")
  }

  ngAfterContentInit(): void {
    console.log("ContentInit 5a", this.txtArea, this.simpleDiv);
    console.log("ContentInit undefined because never pierce!", this.hahaDiv);
    console.log("ContentInit undefined because children are limited to direct by default", this.simpleDivList.first);
  }

  ngAfterViewInit(): void {
    console.log("ViewInit 5b", this.txtArea, this.txtAreaSig(), this.simpleDiv)
  }

  ngAfterContentChecked(): void {
    console.log("ContentChecked 6a")
  }

  ngAfterViewChecked(): void {
    console.log("ViewChecked 6b")
  }

  ngOnDestroy(): void {
    console.log(7)
  }

}
