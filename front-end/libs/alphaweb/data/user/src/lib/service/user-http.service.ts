import {HttpClient, HttpHeaders} from "@angular/common/http";
import {register} from "@swc-node/register/register";
import {BuyProductCommand, UserRegistrationCommand} from "../actions/user.action";
import {inject, Injectable} from "@angular/core";
import {lastValueFrom, Observable} from "rxjs";
import {LoginView, Product, User} from "../model/user-domain.model";

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
  login(): Promise<LoginView> {
  // `firstValueFrom` turns an `Observable` into a `Promise`
  // return lastValueFrom(this.http.get<User>('/api/user', { headers }));
  // return lastValueFrom(this.http.get<User>('/api/user'));
  return lastValueFrom(this.http.get<LoginView>('/api/user'));
  }

  buyProduct(command:BuyProductCommand): Promise<Product>{
    return lastValueFrom(this.http.post<Product>('/api/orders', command));

  }
  sendSupportMessage(message: { subject: string, orderNumber?: string, message: string }): Promise<any> {
    return lastValueFrom(this.http.post<any>(`/api/user/support`, message));
  }

}
