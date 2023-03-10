import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestDirective2 } from './boxes/grid.directive';
import { TestDirective } from './boxes/test.directive';
import { BoxesComponent } from './boxes/boxes.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { StatusDirective } from './user-info/status.directive';
import { InfoComponent } from './user-info/info/info.component';
import { StatusBtnDirective } from './user-info/info/status-btn.directive';
import { BirthdayPipe } from './pipes/birthday.pipe';
import { UsernamePipe } from './pipes/usernames.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    TestDirective2,
    BoxesComponent,
    UserInfoComponent,
    StatusDirective,
    InfoComponent,
    StatusBtnDirective,
    BirthdayPipe,
    UsernamePipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
