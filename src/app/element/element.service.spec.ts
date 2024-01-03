import { TestBed } from '@angular/core/testing';

import { ElementService } from './element.service';

describe('ElementService', () => {
  let service: ElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should create a div element', () => {
    let element = service.createDiv('classy', 'this is test');

    expect(element.classList).toContain('classy');
    expect(element.innerHTML).toBe('this is test');
  });

  it('should return the last element from the row', () => {
    // Arrange
    const parent = document.createElement('div');
    const child1 = document.createElement('div');
    const child2 = document.createElement('div');
    const child3 = document.createElement('div');

    parent.appendChild(child1);
    parent.appendChild(child2);
    parent.appendChild(child3);

    spyOn(child1, 'getBoundingClientRect').and.returnValue({ top: 100 } as DOMRect);
    spyOn(child2, 'getBoundingClientRect').and.returnValue({ top: 100 } as DOMRect);
    spyOn(child3, 'getBoundingClientRect').and.returnValue({ top: 90 } as DOMRect);

    // Act
    const result = service.getLastFromRow(child1);

    // Assert
    expect(result).toBe(child2);
  });
});
