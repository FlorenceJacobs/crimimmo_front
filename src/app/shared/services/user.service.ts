import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  subscribe(value: any) {
    const formdata = new FormData();
    console.log(value);
    for (let key in value){
      formdata.append(key, value[key])
    };
        console.log(formdata.get('firstname'), formdata.get('lastname'), formdata.get('picture'), formdata.get('birthdate'), formdata.get('password'));
    return this.httpClient.post<any>(environment.apiUrl + '/add-owner', formdata).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
    );
  }

  login(value: any) {
/*     return this.httpClient.post<{ token: string }>(
      environment.apiUrl + '/login', value
    ).pipe(tap(({ token }) => {
      localStorage.setItem('TOKEN', token);
      const decoded: any = jwtDecode(token);
      this.user$.next({ ...decoded, token });
    })); */
  }
}
