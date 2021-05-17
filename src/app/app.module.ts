import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { StarWarsService } from './star-wars.service';
import { CategoriesComponent } from './categories/categories.component';
import { InMemoryCategoriesService } from './in-memrory-categories.service';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CategoriesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryCategoriesService , { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
