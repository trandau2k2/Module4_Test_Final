import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from '../../components/book/book-list/book-list.component';
import {RouterModule, Routes} from '@angular/router';
import {BookAddComponent} from '../../components/book/book-add/book-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BookListUnreadComponent} from '../../components/book/book-list-unread/book-list-unread.component';
import {BookUpdateComponent} from '../../components/book/book-update/book-update.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'add',
    component: BookAddComponent
  },
  {
    path: 'unread',
    component: BookListUnreadComponent
  },
  {
    path: 'update',
    component: BookUpdateComponent
  },
];


@NgModule({
  declarations: [
    BookListComponent,
    BookAddComponent,
    BookListUnreadComponent,
    BookUpdateComponent
  ],
  exports: [
    BookAddComponent,
    BookUpdateComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BookModule {
}
