import { Component } from '@angular/core';

@Component({
  selector: 'app-current-month',
  templateUrl: './current-month.component.html',
  styleUrls: ['./current-month.component.css']
})
export class CurrentMonthComponent {

  datas = [
    { name: 'teste', value: 1200 },
    { name: 'Nubank', value: 140 },
  ];

}
