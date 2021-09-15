import { Component } from '@angular/core';
import { MyTypeReExported } from './type-export';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myType?: MyTypeReExported;
}
