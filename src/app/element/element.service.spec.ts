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

  it('should get last from row', () => {
    let rowElement = {

    } as Element;

    let element = service.getLastFromRow(rowElement);
  });
});
