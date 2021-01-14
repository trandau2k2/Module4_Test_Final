import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from '../../components/book/book-list/book-list.component';
import {RouterModule, Routes} from '@angular/router';
import {BookAddComponent} from '../../components/book/book-add/book-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookListUnreadComponent} from "../../components/book/book-list-unread/book-list-unread.component";

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: '',
    component: BookAddComponent
  },
  {
    path: '',
    component: BookListUnreadComponent
  },
];


@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    BookListUnreadComponent
  ],
  exports: [
    BookAddComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BookModule {
}
