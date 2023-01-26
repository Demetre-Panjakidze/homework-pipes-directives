import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BtnSelect } from './child/button.directive';
import { ChildComponent } from './child/child.component';
import { TestDirective2 } from './flex.directive';
import { TestDirective } from './test.directive';
import { BazeraIfDirective } from './bazera-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TestDirective,
    TestDirective2,
    BtnSelect,
    BazeraIfDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
