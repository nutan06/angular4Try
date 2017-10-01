import { Component, OnInit } from '@angular/core';
import { BooksdataService } from '../../services/booksdata.service';
import { Books } from '../../models/Books';
@Component({
  selector: 'app-books-available',
  templateUrl: './books-available.component.html',
  styleUrls: ['./books-available.component.css']
})
export class BooksAvailableComponent implements OnInit {
  books:Books[];
  constructor(public booksdataService:BooksdataService) {
   
   }

  ngOnInit() {
    this.books = this.booksdataService.getBooks();
    
  }
  addBook(books:Books){
    this.booksdataService.addBook(books);
  }

}
