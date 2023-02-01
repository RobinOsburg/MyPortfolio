import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
  angularProject = true;
  javascriptProject = true;



  linkTo(url: string) {
    window.open('http://' + url, '_blank');
  }

  showAllProjects() {
    this.javascriptProject = true;
    this.angularProject = true;
  }

  showAngularProjects() {
    this.angularProject = true;
    this.javascriptProject = false;
    

  }

  showJsProjects() {
    this.javascriptProject = true;
    this.angularProject = false;
  }

}
