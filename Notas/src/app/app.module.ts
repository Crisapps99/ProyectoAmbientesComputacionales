import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule }from '@angular/common/http';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearNotaComponent } from './components/crear-nota/crear-nota.component';
import { ListarNotaComponent } from './components/listar-nota/listar-nota.component';
import { VistaNotasComponent } from './components/vista-notas/vista-notas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipe } from './components/listar-nota/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CrearNotaComponent,
    ListarNotaComponent,
    VistaNotasComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
  
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en-US' }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
