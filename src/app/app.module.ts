import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// Import de FormsModule: necesario para usar NgModel y hacer Two-Way Data Binding
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { JuegoComponent } from './juego/juego.component';

@NgModule({
  declarations: [
    
    JuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule           // Se añade a los imports
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [JuegoComponent]
})
export class AppModule { }
