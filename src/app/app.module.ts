import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestDirective2 } from './grid.directive';
import { TestDirective } from './test.directive';

@NgModule({
  declarations: [AppComponent, TestDirective, TestDirective2],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
