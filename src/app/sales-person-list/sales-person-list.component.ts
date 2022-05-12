import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Lionel", "MESSI", "messi@foot.com", 50000),
    new SalesPerson("Cristiano", "RONALDO", "ronaldo@foot.com", 40000),
    new SalesPerson("Junior", "NEYMAR", "neymar@foot.com", 90000),
    new SalesPerson("Karim", "BENZEMA", "benzema@foot.com", 60000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
