import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of sales person objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("John","Layne","john.layne@gmail.com",75000),
    new SalesPerson("Amy","Taylow","amy.taylor@aol.com",90000),
    new SalesPerson("Myra","Banks","myra.banks@gmail.com",80000),
    new SalesPerson("Peter","Stadler","peter.stadler@aol.com",40000),
    new SalesPerson("Kara","Edwards","kara.edwards@gmail.com",55000)


  ];

  


  constructor() { }

  ngOnInit(): void {
  }

}
