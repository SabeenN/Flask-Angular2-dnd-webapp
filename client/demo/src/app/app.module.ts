import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { DragulaModule } from 'ng2-dragula';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EXAMPLES } from './home';
import { DemoComponent } from './app.component';
import { CdkTableModule } from '@angular/cdk';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { HomeComponent }      from './home';
import { AppRoutingModule }     from './app-routing.module';

import {
MdAutocompleteModule,
MdButtonModule,
MdButtonToggleModule,
MdCardModule,
MdCheckboxModule,
MdChipsModule,
MdCoreModule,
MdDatepickerModule,
MdDialogModule,
MdExpansionModule,
MdGridListModule,
MdIconModule,
MdIconRegistry,
MdInputModule,
MdListModule,
MdMenuModule,
MdNativeDateModule,
MdPaginatorModule,
MdProgressBarModule,
MdProgressSpinnerModule,
MdRadioModule,
MdRippleModule,
MdSelectModule,
MdSidenavModule,
MdSliderModule,
MdSlideToggleModule,
MdSnackBarModule,
MdSortModule,
MdTableModule,
MdTabsModule,
MdToolbarModule,
MdTooltipModule,
} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ]
})
export class PlunkerMaterialModule {}

@NgModule({
  declarations: [
    HomeComponent,
    DemoComponent,
    ...EXAMPLES
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragulaModule,
    CommonModule,
    BrowserAnimationsModule,
    PlunkerMaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule
    ],

  providers: [],
  bootstrap: [DemoComponent]
})

export class DragulaDemoModule {
}
