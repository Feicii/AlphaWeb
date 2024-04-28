import {HttpClient, HttpHeaders} from "@angular/common/http";
import {register} from "@swc-node/register/register";
import {UserRegistrationCommand} from "../actions/user.action";
import {inject, Injectable} from "@angular/core";
import {lastValueFrom, Observable} from "rxjs";
import {User} from "../model/user-domain.model";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService{
  private http =inject(HttpClient)
// constructor(private http: HttpClient) {
// }
    register(command: UserRegistrationCommand): Promise<User> {
        // `firstValueFrom` turns an `Observable` into a `Promise`
        return lastValueFrom(this.http.post<User>(`/api/registration`, command));
    }
  // login(headers: HttpHeaders): Promise<User> {
  // login(): Promise<User> {
  // `firstValueFrom` turns an `Observable` into a `Promise`
  // return lastValueFrom(this.http.get<User>('/api/user', { headers }));
  // return lastValueFrom(this.http.get<User>('/api/user'));
  // return lastValueFrom(this.http.get<User>('/api/user'));
  // }
}
