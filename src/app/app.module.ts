import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ImageFormatterComponent } from './components/image-formatter/image-formatter.component';
import { LinkFormatterComponent } from './components/link-formatter/link-formatter.component';
import { SelectedItemsComponent } from './components/selected-items/selected-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageFormatterComponent,
    LinkFormatterComponent,
    SelectedItemsComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([ImageFormatterComponent, LinkFormatterComponent]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
