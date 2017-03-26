import { Component } from '@angular/core';
import { CardInput } from './card-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards: CardInput[] = [{
    title: 'Canal',
    content: 'Canal is a mobile app platform for keeping teams and organizations in constant contact. Founded 2017.',
    link: 'https://www.getcanal.com/'
  }];
}
