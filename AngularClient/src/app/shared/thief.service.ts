import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Thief } from './thief.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThiefService {

  thievesDetails : Thief[];

  selectedThief : Thief ={
    _id : '',
    fullName : '',
    email : '',
    password : ''
  };

  constructor(private http : HttpClient) 
  {

   }

   postThief( thief : Thief)
   {
     return this.http.post(environment.apiBaseURL + '/register',thief);
   }

   getThieves() 
   {
     console.log('within thief.service -> GetThieves....');
      return this.http.get(environment.apiBaseURL + '/getThieves');
   }

   deleteThief(_id : String)
   {
     console.log('DeleteThief Thief.service.ts');
     console.log(' ' +environment.apiBaseURL + `/deleteThief/id/` + `${_id}` + ' ');
     return this.http.delete(environment.apiBaseURL + `/deleteThief/id/` + `${_id}`);
   }

   putThief(thief : Thief)
   {
     console.log('PutThief Thief.Service.ts' + thief._id);
     console.log(' ' + environment.apiBaseURL + `/updateThief/id/`  + `${thief._id}`,thief + ' ');
     return this.http.put(environment.apiBaseURL + `/updateThief/id`  + `/${thief._id}`,thief);
   }
}
