import { Injectable } from '@angular/core';
import { Machine } from '../interfaces/machine.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MachinesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllMachines(): Promise<Machine[]> {
    const auth = environment.user + ':' + environment.pass;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + window.btoa(auth)
      })
    }

    return lastValueFrom(this.httpClient.get<Machine[]>(`${this.baseUrl}`, httpOptions));
  }

}
