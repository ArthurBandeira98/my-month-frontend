import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class CurrentMonthFormComponent implements OnInit {

  @Input() title: string = '';
  @Input() item: any;

  statusOptions: string[] = ['Pendente', 'Pago', 'Atrasado'];
  categoryOptions: string[] = ['Despesas', 'Receitas'];

  constructor(protected ref: NbDialogRef<CurrentMonthFormComponent>) {}

  ngOnInit(): void {
    console.log(this.item);
  }

  submit() {
    this.ref.close();
  }

  close() {
    this.ref.close();
  }
}
