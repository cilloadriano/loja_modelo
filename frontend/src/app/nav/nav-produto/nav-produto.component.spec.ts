import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProdutoComponent } from './nav-produto.component';

describe('NavProdutoComponent', () => {
  let component: NavProdutoComponent;
  let fixture: ComponentFixture<NavProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
