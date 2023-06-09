import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


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
