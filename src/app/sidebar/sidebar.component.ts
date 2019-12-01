import { Component, OnInit } from '@angular/core';
import {AppService, Balance} from "../app.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    public balance: Balance = new Balance(0, 0);
    constructor (private _appService: AppService) {}

    ngOnInit() {
        this._appService.getBalance().subscribe(data => {
            this.balance = data;
        });
    }

}
