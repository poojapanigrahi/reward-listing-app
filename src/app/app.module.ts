import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListingComponent } from './components/listing/listing.component';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    // AppComponent,
    // HeaderComponent,
    // FooterComponent,
    // ListingComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatPaginatorModule 
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
