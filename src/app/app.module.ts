import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchemaComponent } from './schema/schema.component';
import { SchemaComponent as JsonSchema } from '@miguimono/json-schema/ng16';
@NgModule({
  declarations: [AppComponent, SchemaComponent],
  imports: [BrowserModule, JsonSchema],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
