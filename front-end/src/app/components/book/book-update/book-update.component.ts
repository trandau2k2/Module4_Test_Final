import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../../services/book.service";
import {Route, Router, ActivatedRoute, ParamMap} from "@angular/router";
import {IBook} from "../../IBook";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  formUpdateBook: FormGroup;
  private idBook: IBook;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
  ) {
  }

  ngOnInit()
    :
    void {
    this.route.queryParams.subscribe(params => {
      this.idBook.id = params['id'];
    });

    this.formUpdateBook = this.fb.group({
      id: this.idBook.id,
      name: ['', [Validators.required]],
    });
  }

  submit() {
    let data = this.formUpdateBook.value;
    this.bookService.update(data).subscribe((res: IBook) => {
      this.router.navigate(['books']);
    });
  }

}
