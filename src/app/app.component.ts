import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nutritionApp';
  data:any;

  getData(data:any){
    this.data = data;
    console.log('res' , data);
  }
}
