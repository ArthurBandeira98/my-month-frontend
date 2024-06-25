import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CurrentMonthFormComponent } from './form/form.component';

@Component({
  selector: 'app-current-month',
  templateUrl: './current-month.component.html',
  styleUrls: ['./current-month.component.css']
})
export class CurrentMonthComponent implements OnInit {

  datas = [
    { name: 'teste', value: 1200 },
    { name: 'Nubank', value: 140 },
  ];

  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {
  }

  open() {
    this.dialogService.open(CurrentMonthFormComponent);
  }

}
