import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { NoDataFoundComponent } from '../no-data-found/no-data-found.component';

export const routes: Routes = [{path:"home",component:HomeComponent, title: "home"}
    , {path:"about" , component:AboutComponent , title:"about"},{
        path:"portfolio" , component:PortfolioComponent , title:"portfolio"
    }
    ,{
        path:"contact" , component:ContactComponent , title:"contact"
    }
    ,{
        path:"", redirectTo:"home" , pathMatch:"full"
    }
    ,{
        path:"**" , component:NoDataFoundComponent , title:"error"
    }
    
];
