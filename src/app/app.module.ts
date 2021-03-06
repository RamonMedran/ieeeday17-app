import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { IonicStorageModule } from '@ionic/storage';
import { NativeAudio } from '@ionic-native/native-audio';


import { MyApp } from './app.component';
import { HomePage } from '../pages/Inicio/inicio';
import { AgendaPage } from '../pages/agenda/agenda';
import { RamasIEEE } from '../pages/ramas-ieee/ramas-ieee';
import { RamasDetalle } from '../pages/ramas-detalle/ramas-detalle';
import { CapitulosPage } from '../pages/capitulos/capitulos';
import { CapitulosDetallePage } from '../pages/capitulos-detalle/capitulos-detalle';
import { YoungprofessionalsPage } from '../pages/youngprofessionals/youngprofessionals';
import { QueesPage } from '../pages/quees/quees';
import { PremiosPage } from '../pages/premios/premios';
import { GymkhanaPage } from '../pages/gymkhana/gymkhana';
import { RestaurantesPage } from './../pages/restaurantes/restaurantes';
import { RestaurantesDetallePage } from './../pages/restaurantes-detalle/restaurantes-detalle';
import { RankingPage } from '../pages/ranking/ranking';
import { Prueba1Page } from '../pages/prueba1/prueba1';
import { Prueba2Page } from '../pages/prueba2/prueba2';
import { Prueba3Page } from '../pages/prueba3/prueba3';
import { Prueba4Page } from '../pages/prueba4/prueba4';
import { Prueba5Page } from '../pages/prueba5/prueba5';
import { Prueba6Page } from '../pages/prueba6/prueba6';
import { Prueba7Page } from '../pages/prueba7/prueba7';
import { Prueba8Page } from '../pages/prueba8/prueba8';
import { Prueba9Page } from '../pages/prueba9/prueba9';
import { Prueba10Page } from '../pages/prueba10/prueba10';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AgendaPage,
    RamasIEEE,
    RamasDetalle,
    CapitulosPage,
    CapitulosDetallePage,
    YoungprofessionalsPage,
    PremiosPage,
    QueesPage,
    GymkhanaPage,
    RestaurantesPage,
    RestaurantesDetallePage,
    RankingPage,
    Prueba1Page,
    Prueba2Page,
    Prueba3Page,
    Prueba4Page,
    Prueba5Page,
    Prueba6Page,
    Prueba7Page,
    Prueba8Page,
    Prueba9Page,
    Prueba10Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AgendaPage,
    RamasIEEE,
    RamasDetalle,
    CapitulosPage,
    CapitulosDetallePage,
    YoungprofessionalsPage,
    PremiosPage,
    QueesPage,
    GymkhanaPage,
    RestaurantesPage,
    RestaurantesDetallePage,
    RankingPage,
    Prueba1Page,
    Prueba2Page,
    Prueba3Page,
    Prueba4Page,
    Prueba5Page,
    Prueba6Page,
    Prueba7Page,
    Prueba8Page,
    Prueba9Page,
    Prueba10Page
  ],
  providers: [
    HTTP,
    NativeAudio,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
