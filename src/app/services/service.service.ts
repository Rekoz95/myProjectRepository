import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ModelUser} from 'src/app/modelUser'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private urlModel: string;
  modelUsers: ModelUser[]

  constructor(private http: HttpClient) {
   
   }

   getUser():Observable<ModelUser[]> {
     return this.http.get<ModelUser[]>(environment.baseUrl + '/registrazione')
   }

   register(modelUser:ModelUser): Observable<ModelUser> {
     return this.http.post<ModelUser>(environment.baseUrl+ '/registrazione',modelUser)
   }

   login(username: string, password: string): Observable<ModelUser> {
    return this.http.post<ModelUser>(environment.baseUrl+ '/login', {username, password})
   }


}
