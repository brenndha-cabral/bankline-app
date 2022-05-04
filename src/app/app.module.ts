import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransitionListComponent } from './components/transition-list/transition-list.component';
import { TransitionNewComponent } from './components/transition-new/transition-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TransitionListComponent,
    TransitionNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
