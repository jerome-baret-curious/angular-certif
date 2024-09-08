import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomNativeButtonComponent} from "../component/custom-native-button.component";
import {OtherButtonComponent} from "../component/other-button.component";
import {BiggerComponent} from "../component/bigger.component";
import {SimpleDivComponent} from "../component/simple-div.component";
import {LoopComponent} from "../component/loop.component";

@Component({
  selector: 'jba-root',
  standalone: true,
  imports: [RouterOutlet, CustomNativeButtonComponent, OtherButtonComponent, BiggerComponent, SimpleDivComponent, LoopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-certif';
}
