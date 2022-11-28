import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nutritionApp';
  data:any;
  showFlag?:boolean;

  getData(data:any){
    this.data = data;
    console.log('res' , data);
  }
  viewDetails(){
    this.showFlag = true;
  }
}
