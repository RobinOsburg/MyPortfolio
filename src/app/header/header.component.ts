import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

mobile:boolean = false;
  openNavbar(){
    this.mobile = !this.mobile
  }

}
