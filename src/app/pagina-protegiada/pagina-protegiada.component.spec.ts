import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProtegiadaComponent } from './pagina-protegiada.component';

describe('PaginaProtegiadaComponent', () => {
  let component: PaginaProtegiadaComponent;
  let fixture: ComponentFixture<PaginaProtegiadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaProtegiadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaProtegiadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
