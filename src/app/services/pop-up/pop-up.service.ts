import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor(
    @Inject(DOCUMENT) private document: Document)
  { }

  open () {
    this.document.body.classList.add('overflow-hidden');
    let container = this.document.querySelector('.container');
    container?.classList.add('disabled');
    let popUp = this.document.querySelector('app-pop-up');
    popUp?.classList.add('active');
  }

  close () {
    this.document.body.classList.remove('overflow-hidden');
    let container = this.document.querySelector('.container');
    container?.classList.remove('disabled');
    let popUp = this.document.querySelector('app-pop-up');
    popUp?.classList.remove('active');
  }
}
