import { Routes } from '@angular/router';
import { ThiefDetailsComponent } from './thief-details/thief-details.component';
import { AppComponent } from './app.component';

export const appRoutes : Routes =[

    {
        path : 'thief-details',component : ThiefDetailsComponent,
        children : [{ path : '' , component : AppComponent}]
    },
    {
        path : '', redirectTo : 'ThiefDetailsComponent', pathMatch : 'full'
    }
];