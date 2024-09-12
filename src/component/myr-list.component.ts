import {Component, Input} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component(
  {
    standalone: true,
    templateUrl: './myr-list.component.html',
    imports: [
      RouterLink,
      RouterLinkActive
    ],
    selector: 'jba-myrs'
  })
export class MyrListComponent {
  @Input() title!: string; // thanks to withComponentInputBinding, is like this.activatedRoute.snapshot.data['title']
}
