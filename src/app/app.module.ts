import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {UserService} from './service/user.service';
import {AddItemComponent} from './add-item/add-item.component';
import {ItemRailwayService} from './service/item-railway.service';
import {MapUserComponent} from './map-user/map-user.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {EditItemComponent} from './edit-item/edit-item.component';
import {ProfileComponent} from './profile/profile.component';
import {MapItemComponent} from './map-item/map-item.component';
import {ChartComponent} from './chart/chart.component';
import {AuditComponent} from './audit/audit.component';
import {TripComponent} from './trip/trip.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'edit-item', component: EditItemComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'map-user', component: MapUserComponent},
  {path: 'map-item', component: MapItemComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'audit', component: AuditComponent},
  {path: 'trips', component: TripComponent},
  // {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    FooterComponent,
    AddItemComponent,
    MapUserComponent,
    ScheduleComponent,
    EditItemComponent,
    ProfileComponent,
    MapItemComponent,
    ChartComponent,
    AuditComponent,
    TripComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
  providers: [UserService, ItemRailwayService]
})
export class AppModule {
}
