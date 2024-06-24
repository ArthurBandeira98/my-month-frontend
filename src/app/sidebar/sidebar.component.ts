import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  items: NbMenuItem[] = [
    {
      title: 'Inicio',
      icon: 'home-outline',
      link: 'home',
    },
    {
      title: 'Balanço Atual',
      icon: 'pie-chart-outline',
      link: 'current-month',
    },
    {
      title: 'Balanços Anteriores',
      icon: 'pie-chart-outline',
    },
    {
      title: 'Sair',
      icon: 'log-out-outline',
    },
  ];


}
