import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    date : Date = new Date();
    users : any[];
    keyword : string ;
    constructor() {
        this.users = [
        {
            name : 'Meriem', phone : '12345678'
        },
    
        {
            name : 'Nermine', phone : '12345678'
        },
        {
            name : 'Mohamed', phone : '12345678'
        }
   
    ]}

    ngOnInit(): void { }
}
