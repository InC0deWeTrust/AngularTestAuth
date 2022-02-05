import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { 
  BookDto, 
  BookServiceProxy, 
  FullInfoBookDto, 
  BookTypeDto } from 'src/shared/service-proxies/service-proxies';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public book: BookDto;
  public books: BookDto[];
  public fullInfoBook: FullInfoBookDto;
  public bookTypes: BookTypeDto[];

  constructor(
    private _httpClient: HttpClient,
    private _bookService: BookServiceProxy
  ) { 
    this.book = new BookDto;
    this.books = [];
    this.fullInfoBook = new FullInfoBookDto;
    this.bookTypes = [];
  }

  ngOnInit(): void {
  }

  getAllBookTypes(){
    this._bookService.getAllTypes().subscribe(result =>{
      this.bookTypes = result;
    })
  }

  getAllBooks(){
    this._bookService.getAll().subscribe(result =>{
      this.books = result;
    })
  }

  getBook(bookId: number){
    this._bookService.get(bookId).subscribe(result => {
      this.book = result;
    })
  }

  getFullInfoAboutBook(bookId: number){
    this._bookService.getFullInfo(bookId).subscribe(result =>{
      this.fullInfoBook = result;
    })
  }
}
