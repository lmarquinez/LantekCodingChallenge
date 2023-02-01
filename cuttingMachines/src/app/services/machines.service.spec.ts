import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MachinesService } from './machines.service';

describe('MachinesService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [MachinesService]
  }));

  it('The machines service should be created', () => {
    const service: MachinesService = TestBed.inject(MachinesService);
    expect(service).toBeDefined();
    expect(service).toBeTruthy();
  });

  it('The service should have a getAllMachines() function, to obtain all the data of al machines', () => {
    const service: MachinesService = TestBed.inject(MachinesService);
    expect(service.getAllMachines).toBeDefined();
    expect(service.getAllMachines).toBeTruthy();
  });

});
