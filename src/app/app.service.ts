import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    balance: Balance;

    constructor(private http: HttpClient) { }

    getBalance(): Observable<any> {
        return this.http.get<any>('http://192.168.43.254:3000/getbalance')
    }

    sendMoney(): Observable<any> {
        return this.http.get<any>('http://192.168.43.254:3000/sendtoaddress')
    }

}

export class Balance {
    constructor(public balance: number,
    ) { }
}