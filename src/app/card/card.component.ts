import { Component, Input } from '@angular/core';
import { CardInput } from '../card-input';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  private _card: CardInput = {
    title: '',
    content: '',
    link: ''
  };

  constructor() { }

  @Input('content')
  set content(card: CardInput) {
    this._card.title = (card.title && card.title.trim()) || '<no name set>';
    this._card.content = (card.content && card.content.trim()) || '<no name set>';
    this._card.link = (card.link && card.link.trim()) || '<no name set>';
    console.log(card);
  }

  get content(): CardInput { return this._card; }
}
