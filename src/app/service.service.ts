import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ModelUser} from 'src/app/modelUser'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlModel:"http://localhost:3000/modelUser"

  constructor(private http: HttpClient) { }

   getUser():Observable<ModelUser> {
     return this.http.get<ModelUser>(this.urlModel)
   }

   newUser(modelUser:ModelUser): Observable<ModelUser> {
     return this.http.post<ModelUser>(this.urlModel,modelUser.username)
   }


}
