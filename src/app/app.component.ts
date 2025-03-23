import { Component } from '@angular/core';
import { CategorynavigationComponent } from "./categorynavigation/categorynavigation.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CategorynavigationComponent]
})
export class AppComponent {
  title = 'estore';
}
