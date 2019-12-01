import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AppService {

    //balance: Balance;

    constructor(private http: HttpClient) { }

    getBalance() {
        return this.http.get('https://api.npms.io/v2/search?q=scope:angular')
    }

}

export class Balance {
    constructor(public balance: number,
    ) { }
}