import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachinesListComponent } from './machines-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MachinesService } from '../../services/machines.service';

describe('MachinesListComponent', () => {
  let component: MachinesListComponent;
  let fixture: ComponentFixture<MachinesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MachinesListComponent],
      imports: [HttpClientTestingModule],
      providers: [MachinesService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MachinesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('The machines-list component should be created', () => {
    expect(component).toBeDefined();
    expect(component).toBeInstanceOf(MachinesListComponent);
    expect(component).toBeTruthy();
  });

  it(`The component should have an array for saving all the machines, to display them later`, () => {
    fixture = TestBed.createComponent(MachinesListComponent);
    component = fixture.componentInstance;
    expect(Array.isArray(component.arrMachines)).toBeTrue();
  });

});
