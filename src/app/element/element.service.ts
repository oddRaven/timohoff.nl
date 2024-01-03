import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  createDiv (className: string, innerHtml: string) : Element {
    let descriptionElement = this.document.createElement("div");
    descriptionElement.classList.add(className);
    descriptionElement.innerHTML = innerHtml;
    return descriptionElement;
  }

  getLastFromRow (rowElement: Element) : Element {
    let top = rowElement.getBoundingClientRect().top;
    let htmlCollection = rowElement.parentElement?.children as HTMLCollection;
    let profileElements = Array.from(htmlCollection) as Element[];
    return profileElements.findLast((element) => element.getBoundingClientRect().top == top) as Element;
  }
}
