import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './components/root/root';
import {HeaderComponent} from './components/header/header';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {HomeComponent} from './components/home/home';
import {SharedModule} from '../shared/module';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from './components/about/about';
import {WishlistModule} from '../wishlist/module';
import {AvailableComponent} from './components/available/available';
import {MenuComponent} from './components/menu/menu';
import {ContentHostComponent} from './components/contentHost/content-host';
import {FeaturesComponent} from './components/features/features';
import {AppComponent} from './components/app/app';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    SharedModule,
    FormsModule,
    WishlistModule,
  ],
  declarations: [
    RootComponent,
    HeaderComponent,
    HomeComponent,
    FeaturesComponent,
    AboutComponent,
    AvailableComponent,
    MenuComponent,
    ContentHostComponent,
    AppComponent
  ],
  bootstrap: [RootComponent],
  providers: [
  ]
})
export class AppModule {
}
