import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoriesComponent } from './Components/HomeSections/categories/categories.component';
import { StoryComponent } from './Components/HomeSections/story/story.component';
import { ProcessComponent } from './Components/HomeSections/process/process.component';
import { TeawareComponent } from './Components/HomeSections/teaware/teaware.component';
import { HeroComponent } from './Components/HomeSections/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    StoryComponent,
    ProcessComponent,
    TeawareComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
