import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { JuegoComponent } from './juego/juego.component';
import { AppModule } from './app.module';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [JuegoComponent],
})
export class AppServerModule {}
