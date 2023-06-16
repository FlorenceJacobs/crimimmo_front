import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {

   user$: BehaviorSubject<{ token: string, id: number, role: string }|null> 
    = new BehaviorSubject<{ token: string, id: number, role: string }|null>(null);

  constructor(
    private httpClient: HttpClient,
  ) { 
    const token = localStorage.getItem('TOKEN');
    if(token) {
      const decoded: any = jwtDecode(token);
      this.user$.next({ ...decoded, token })
    }
  }

  register(value: any) {
    const formdata = new FormData();
    //console.log
    console.log(value);
    for (let key in value){
      formdata.append(key, value[key])
    };
    return this.httpClient.post<any>(environment.apiUrl + '/add-user', formdata);
  };

  login(value: any) {
    //console.log
    console.log(value);
     return this.httpClient.post<{ token: string }>(
      environment.apiUrl + '/login', value
    ).pipe(tap(({ token }) => {
      localStorage.setItem('TOKEN', token);
      const decoded: any = jwtDecode(token);
      this.user$.next({ ...decoded, token });
    }));
  }

    logout() {
    this.user$.next(null);
    localStorage.clear();
  }
}
