import { Injectable } from '@angular/core';
import { Books } from '../models/Books';
@Injectable()
export class BooksdataService {
  books : Books[];
  constructor() { 
    this.books = [
      {
        Name:'Streaming Systems',
        Author:'Tyler Akidau,Slava Chernyak,Reuven Lax',
        Description:'The What, Where, When, and How of Large-Scale Data Processing',
        hide : true
      },
      {
        Name:'Natural Language Processing with Python',
        Author:'Edward Loper, Steven Bird, Ewan Klein',
        Description:'This book offers a highly accessible introduction to natural language processing, the field that supports a variety of language technologies, from predictive text and email filtering to automatic summarization and translation.',
        hide : true
      },
      {
        Name:'JavaScript Design Patterns 20 Patterns for Advancing Your JavaScript Skills',
        Author:'Ben Fhala',
        Description:'Dive deep into JavaScript design patterns to write intelligent, pragmatic code for a wide array of real-world programming situations',
        hide : true
      }
    ];
  }
  getBooks(){
    return this.books;
  }
  addBook(books:Books){
    this.books.push(books);
  }

  deleteBook(books:Books){
    for(let i = 0; i< this.books.length; i++){
      if(books == this.books[i]){
        this.books.splice(i,1)
      }
    }
  }
}
