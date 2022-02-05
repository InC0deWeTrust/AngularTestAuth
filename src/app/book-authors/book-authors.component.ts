import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorServiceProxy, AuthorDto } from 'src/shared/service-proxies/service-proxies';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.css']
})
export class BookAuthorsComponent implements OnInit {
  public author: AuthorDto;
  public authors: AuthorDto[];

  constructor(
    private _httpClient: HttpClient,
    private _authorsService: AuthorServiceProxy
  ) {
    this.author = new AuthorDto;
    this.authors = [];
   }

  ngOnInit(): void {
  }

  getAuthor(authorId: number){
    this._authorsService.get(authorId).subscribe(result => {
      this.author = result;
    });
  }

  getAllAuthors(){
    this._authorsService.getAll().subscribe(result => {
      this.authors = result;
    })
  }
  
}
