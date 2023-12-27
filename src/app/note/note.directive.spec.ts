import { ElementRef } from '@angular/core';

import { NoteDirective } from './note.directive';

describe('NoteDirective', () => {
  it('should create an instance', () => {
    const directive = new NoteDirective({} as ElementRef, {}, {} as Document);
    expect(directive).toBeTruthy();
  });
});
