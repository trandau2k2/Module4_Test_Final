import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../../services/book.service";
import {Route, Router} from "@angular/router";
import {IBook} from "../../IBook";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  formUpdateBook: FormGroup;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.formUpdateBook = this.fb.group({
      id: 2,
      name: ['', [Validators.required]],
    });
  }

  submit() {
    let data = this.formUpdateBook.value
  }

}
