import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAddComponent } from './components/book/book-add/book-add.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { MainComponent } from './layouts/core/main/main.component';
import { MenuComponent } from './layouts/core/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    BookListComponent,
    MainComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
