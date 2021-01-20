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
  color = 'yellow';
  currentVal;
  disabledBox = true;
  data = ['rakesh','Rtg','Akash','Rahul'];
  dataObj = [
    {
      name:'Rtg',
      age:'25'
    },
    {
      name:'sam',
      age:'26'
    },
    {
      name:'akash',
      age:'27'
    },
    {
      name:'Rahul',
      age:'28'
    }
  ];
  getVal(val)
  {
      this.currentVal = val;
  }
  enableBox()
  {
     this.disabledBox = false;
  }
}
