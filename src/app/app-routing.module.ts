import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingHomeComponent } from './Pages/listing-home/listing-home.component';


const routes: Routes = [
  {
    path :'',
    component : ListingHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
