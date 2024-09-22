import {Component, computed, Input} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {toSignal} from "@angular/core/rxjs-interop";

export type SelInt = {
  code: number
  name: string
}

@Component(
  {
    standalone: true,
    templateUrl: './myr-list.component.html',
    imports: [
      RouterLink,
      RouterLinkActive,
      ReactiveFormsModule
    ],
    selector: 'jba-myrs'
  })
export class MyrListComponent {
  @Input() title!: string; // thanks to withComponentInputBinding, is like this.activatedRoute.snapshot.data['title']

  selVals: SelInt[] = [
    {
      code: 1,
      name: "One"
    },
    {
      code: 2,
      name: "Two"
    }];

  selectCtrl = new FormControl(this.selVals[0]);

  valCtrl = toSignal(this.selectCtrl.valueChanges, {initialValue: this.selVals[0]});
  formattedVal = computed(() => {
    return this.valCtrl()?.name + ": " + this.valCtrl()?.code;
  });
}
