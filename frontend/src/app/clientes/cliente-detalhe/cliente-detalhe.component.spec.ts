import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDetalheComponent } from './cliente-detalhe.component';

describe('ClienteDetalheComponent', () => {
  let component: ClientesDetalheComponent;
  let fixture: ComponentFixture<ClientesDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientesDetalheComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
