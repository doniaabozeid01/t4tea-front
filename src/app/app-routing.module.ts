import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './Components/shop/shop.component';
import { HomeComponent } from './Components/home/home.component';
import { GiftsComponent } from './Components/gifts/gifts.component';
import { TeawarePageComponent } from './Components/teaware-page/teaware-page.component';
import { AboutComponent } from './Components/about/about.component';
import { DetailsComponent } from './Components/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'teaware', component: TeawarePageComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
