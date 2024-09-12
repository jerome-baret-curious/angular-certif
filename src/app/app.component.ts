import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CustomNativeButtonComponent} from "../component/custom-native-button.component";
import {OtherButtonComponent} from "../component/other-button.component";
import {BiggerComponent} from "../component/bigger.component";
import {SimpleDivComponent} from "../component/simple-div.component";
import {LoopComponent} from "../component/loop.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'jba-root',
  standalone: true,
  imports: [RouterOutlet, CustomNativeButtonComponent, OtherButtonComponent, BiggerComponent, SimpleDivComponent, LoopComponent, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-certif';

  myrNb = 1;
}
