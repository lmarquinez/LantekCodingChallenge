import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/app/interfaces/machine.interface';
import { MachinesService } from 'src/app/services/machines.service';

@Component({
  selector: 'app-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.css']
})
export class MachinesListComponent implements OnInit {

  arrMachines: Machine[] = [];
  constructor(private machineService: MachinesService) { }

  async ngOnInit(): Promise<void> {

    try {
      let response = await this.machineService.getAllMachines();
      this.arrMachines = response;
    }
    catch (err: any) {
      console.log(err.error);
    }
  }

}
