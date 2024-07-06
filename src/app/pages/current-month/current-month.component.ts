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
    { name: 'teste', value: 1200, status: 'Pago', dataVencimento: '26/06/2025', dataPagamento: '26/06/2024' },
    { name: 'Nubank', value: 140, status: 'Não Pago', dataVencimento: '26/06/2025', dataPagamento: null },
  ];

  constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {
  }

  open() {
    this.dialogService.open(CurrentMonthFormComponent, {
      context: {
        title: 'Novo Item',
        item: ''
      }
    });
  }

  onEdit(item: any) {
    console.log(item);
    this.dialogService.open(CurrentMonthFormComponent, {
      context: {
        title: 'Editar Item',
        item: item
      }
    });
  }

}
