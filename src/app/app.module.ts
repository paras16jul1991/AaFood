import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SheetComponentComponent } from './sheet-component/sheet-component.component';
import { SheetComponent } from './sheet/sheet.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SheetComponentComponent, SheetComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
