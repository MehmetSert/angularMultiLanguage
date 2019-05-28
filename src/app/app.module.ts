import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CampaignsComponent } from './components/campaigns/campaigns.component';
import {HttpClientModule} from '@angular/common/http';
import { TranslatePipe } from './pipes/translate.pipe';
import {TranslateService} from './services/translate.service';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('tr');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CampaignsComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
