import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navRoutes: any[] = [
    { route: '', name: 'Home'},
    { route: 'product', name: 'Product'},
    { route: 'about', name: 'About Us'}
  ];
    
  constructor() { }

  ngOnInit() {
  }
  
}
