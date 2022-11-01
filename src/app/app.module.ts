import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageComponent } from './components/image/image.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavbarComponent,
    ImageComponent,
    BlogComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
