import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoapp';
  name = 'rocky';
  show = "blue";
  currentVal;
  disabledBox = true;
  getVal(val)
  {
      this.currentVal = val;
  }
  enableBox()
  {
     this.disabledBox = false;
  }
}
