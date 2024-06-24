import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private sideBarService: NbSidebarService) {}

  toggle() {
    this.sideBarService.toggle(false, 'menu-sidebar');
  }

  onLogout() {

  }

}
