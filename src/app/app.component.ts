import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  index = 0;
  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];

  jumpToSlide(number) {
    this.index = number;
  }
}
