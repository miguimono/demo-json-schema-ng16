import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SchemaComponent as JsonSchema } from '@miguimono/json-schema/ng16';

import { AppComponent } from './app.component';
import { ConfigBannerComponent } from './config-banner/config-banner.component';
import { SchemaComponent } from './schema/schema.component';
import { TitleModuleComponent } from './title-module/title-module.component';

@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent,
    ConfigBannerComponent,
    TitleModuleComponent,
  ],
  imports: [BrowserModule, JsonSchema],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
