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
      title: 'Home',
      icon: 'home-outline',
      link: '',
    },
    {
      title: 'Balance',
      icon: 'pie-chart-outline',
    },
    {
      title: 'Logout',
      icon: 'log-out-outline',
    },
  ];


}
