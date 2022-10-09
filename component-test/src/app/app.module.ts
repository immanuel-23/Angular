import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ChildComponent } from './child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Child2Component } from './child2/child2.component';
import { SizerComponent } from './sizer/sizer.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { InrDollarPipe } from './inr-dollar.pipe';
import { StringWordsPipe } from './string-words.pipe';
import { FeetInchesPipe } from './feet-inches.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    SizerComponent,
    PipesComponent,
    CustomPipesComponent,
    InrDollarPipe,
    StringWordsPipe,
    FeetInchesPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
