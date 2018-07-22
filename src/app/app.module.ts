import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { JokesComponent } from './jokes/jokes.component';
import { PictureComponent } from './picture/picture.component';
import { GifComponent } from './picture/gif/gif.component';
import { JpgComponent } from './picture/jpg/jpg.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JokesComponent,
    PictureComponent,
    GifComponent,
    JpgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
