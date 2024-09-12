import {Component} from "@angular/core";
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component(
  {
    standalone: true,
    templateUrl: './myr-detail.component.html',
    imports: [
      RouterLink,
      RouterLinkActive,
      RouterOutlet
    ],
    selector: 'jba-myr'
  })
export class MyrDetailComponent {
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Observables:
    // this.activatedRoute.url
    // this.activatedRoute.params
    // this.activatedRoute.queryParams
    // this.activatedRoute.fragment
    // this.activatedRoute.data
    console.log('id is', this.activatedRoute.snapshot.params['id'])
  }

  okToGoOut(): boolean {
    return true;
  }
}
