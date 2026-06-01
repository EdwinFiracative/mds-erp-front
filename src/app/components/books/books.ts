import { Component, inject, OnInit } from '@angular/core';

import { BookService } from '../../services/book-service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.html',
  styleUrls: ['./books.css'],
})
export class Books implements OnInit {
  books: Book[] = [];
  private readonly bookService = inject(BookService);

  ngOnInit() {
    this.bookService.listBooks().subscribe((data) => {
      this.books = data;
    });
  }
}
