import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JourneyListComponent } from './components/journey-list/journey-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { JourneyCardComponent } from './components/journey-card/journey-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LayoutModule } from '@angular/cdk/layout';
import { AddJourneyModalComponent } from './components/modals/add-journey-modal/add-journey-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { RemoveJourneyDialogComponent } from './components/modals/remove-journey-dialog/remove-journey-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { JourneyFilterPipe } from './data/pipes/journey-filter.pipe';
import { JourneyFilterComponent } from './components/journey-filter/journey-filter.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { JourneyCommentComponent } from './components/journey-comment/journey-comment.component';
import { JourneyCommentListComponent } from './components/journey-comment-list/journey-comment-list.component';
import { NoDataFoundComponent } from './components/no-data-found/no-data-found.component';
import { AddCommentDialogComponent } from './components/modals/add-comment-dialog/add-comment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    JourneyListComponent,
    JourneyCardComponent,
    AddJourneyModalComponent,
    NavbarComponent,
    BreadcrumbComponent,
    RemoveJourneyDialogComponent,
    ShoppingBasketComponent,
    JourneyFilterPipe,
    JourneyFilterComponent,
    JourneyCommentComponent,
    JourneyCommentListComponent,
    NoDataFoundComponent,
    AddCommentDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule,
    LayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    MatSortModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    ToastrModule.forRoot(),
    MatSliderModule,
    MatOptionModule, 
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
