import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ZoominComponent } from './zoomin/zoomin.component';
import { ZoomoutComponent } from './zoomout/zoomout.component';
import { DrawlineComponent } from './drawline/drawline.component';
import { DrawpolygonComponent } from './drawpolygon/drawpolygon.component';
import { LayerComponent } from './layer/layer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ZoominComponent,
    ZoomoutComponent,
    DrawlineComponent,
    DrawpolygonComponent,
    LayerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
