import { ElementRef } from '@angular/core';

import { ScrollActiveDirective } from './scroll-active.directive';

describe('ScrollActiveDirective', () => {
  it('should create an instance', () => {
    const directive = new ScrollActiveDirective(
      new ElementRef(document.createElement('div')),
      'browser',
      document,
    );
    expect(directive).toBeTruthy();
  });
});
