import { Component, OnInit,Input } from '@angular/core';
import { Books } from '../../models/Books';
import { BooksdataService } from '../../services/booksdata.service';
@Component({
  selector: 'app-indibook',
  templateUrl: './indibook.component.html',
  styleUrls: ['./indibook.component.css']
})
export class IndibookComponent implements OnInit {
  @Input('indibook') book:Books;
  constructor(
    public booksdataService:BooksdataService
  ) { }

  ngOnInit() {
  }
  deleteBook(book){
    this.booksdataService.deleteBook(book)
  }
}
