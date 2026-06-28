import { ElementRef } from '@angular/core';

import { NoteDirective } from './note.directive';

describe('NoteDirective', () => {
  it('should create an instance', () => {
    const directive = new NoteDirective(
      new ElementRef(document.createElement('div')),
      'browser',
      document,
    );
    expect(directive).toBeTruthy();
  });
});
