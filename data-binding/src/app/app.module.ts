import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { MeuFormModule } from "./meu-form/meu-form.module";
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule
  ],
  exports:[
    DataBindingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
