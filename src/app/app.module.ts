import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestDirective2 } from './boxes/grid.directive';
import { TestDirective } from './boxes/test.directive';
import { BoxesComponent } from './boxes/boxes.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [AppComponent, TestDirective, TestDirective2, BoxesComponent, UserInfoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
