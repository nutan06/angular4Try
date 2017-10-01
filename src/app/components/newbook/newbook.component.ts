import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Books } from '../../models/Books';

@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  @Output() newBookadd = new EventEmitter<Books>();
  Name:string;
  Author:string;
  Description:string;

  constructor() { }

  ngOnInit() {
  }
  addBook(){
    this.newBookadd.emit({Name:this.Name, Author:this.Author, Description:this.Description,hide:true});
  }

}


