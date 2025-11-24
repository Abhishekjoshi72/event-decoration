import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { Header } from "../header/header";
import { fadeAnimation } from '../../Shared/animations';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [Sidebar, Header, RouterModule],
  standalone: true,
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
  animations: [fadeAnimation]
})
export class AdminLayout {

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
