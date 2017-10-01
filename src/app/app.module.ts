import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksAvailableComponent } from './components/books-available/books-available.component';
import { BooksdataService} from './services/booksdata.service';
import { IndibookComponent } from './components/indibook/indibook.component';
import { NewbookComponent } from './components/newbook/newbook.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksAvailableComponent,
    IndibookComponent,
    NewbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BooksdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
