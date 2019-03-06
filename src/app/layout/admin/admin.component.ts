import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    selectedItem : string ='restaurant';
     // router est un service : on le déclare dans le constructeur 
    constructor(private router : Router) { }

    ngOnInit(): void { }
    onChange(topic : string ){
        this.selectedItem= topic ;
        this.router.navigate(['/'+topic]);
    }
        goToProfile( ){
       
        this.router.navigate(['/profile']);
    }
    goToProduct( ){
       
        this.router.navigate(['']);
    }
}
