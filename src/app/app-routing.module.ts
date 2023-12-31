import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { WatchDetailsComponent } from './watch-details/watch-details.component';


const routes: Routes = [
 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'announcements', component: AnnouncementsComponent },
    { path: 'watch-details', component: WatchDetailsComponent },
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
