import {Component, OnInit} from '@angular/core';

import { products } from '../products';
import {AppService, Balance} from "../app.service";
import {share} from "rxjs/operators";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products = products;

  public balance: Balance = new Balance(0, 0);
  constructor (private _appService: AppService) {}

    ngOnInit(): void {
        this._appService.getBalance().subscribe(data => {
            //this.share();
            console.log(data);
            this.balance = data;
        });
    }

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/