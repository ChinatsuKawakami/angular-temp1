import { NgModule } from'@angular/core';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
//Routes
import {Routes,RouterModule} from '@angular/router';

import {RentalService} from './shared/rental.service';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

  
const routes:Routes=[
   {path:'rentals',
    component:RentalComponent,
    children: [
        {path:'',component:RentalListComponent},
        {path:':rentalId',component:RentalDetailComponent}
     ]
   }  
  ]
  
@NgModule({
    declarations:[
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentalDetailComponent
    ],
    imports:[CommonModule,
            //  RentalModule,
             RouterModule.forChild(routes)
            ],
    providers:[RentalService]
})


export class RentalModule{}