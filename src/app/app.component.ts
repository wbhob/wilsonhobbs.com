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
  }, {
    title: 'Beakr',
    content: 'Beakr predated Canal; it was the all-in-one student life platform for schools. Operated 2015-2017.',
    link: 'https://www.beakr.co/'
  }, {
    title: 'Hobo Technologies',
    content: 'Hobo is the ridesharing app for long-distance. I am doing web presence and am interim CTO. 2017.',
    link: 'https://www.hoboride.com/'
  }];
}
