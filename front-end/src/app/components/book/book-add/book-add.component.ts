import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValueConverter} from '@angular/compiler/src/render3/view/template';
import {BookService} from '../../../services/book.service';
import {HttpResult} from '../../../_core/HttpResult';
import {Route, Router} from '@angular/router';
import {IBook} from "../../IBook";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  formAddBook: FormGroup;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      name: ['', [Validators.required]],
      read: true,
    });
  }

  submit() {
    // @ts-ignore
    let data = this.formAddBook.value;
    this.bookService.create(data).subscribe((res: IBook) => {
        this.router.navigate(['books']);
    })
  }

}
