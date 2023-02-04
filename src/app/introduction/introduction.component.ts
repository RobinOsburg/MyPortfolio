import { Component} from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {



  scrollDown() {
    window.scrollBy(0, 1000);
  }

  scrollToBottom(): void {
    window.scrollTo(0, document.body.scrollHeight);
  }

}
