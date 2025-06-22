import {Component} from "@angular/core";
import {ActivatedRoute, RouterOutlet} from "@angular/router";

@Component(
  {
    templateUrl: './myr-detail.component.html',
    imports: [
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
