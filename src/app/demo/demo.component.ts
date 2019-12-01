import { Component, OnInit } from '@angular/core';
import {AppService, Balance} from "../app.service";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public balance: Balance = new Balance(0, 0);

  constructor (private _appService: AppService) {}

  ngOnInit() {
      this._appService.getBalance().subscribe(data => {
          //this.share();
          console.log(data);
          this.balance = data;
      });
  }

}
