import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app.component';
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/user/user.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {RouterModule, Routes} from "@angular/router";
import {RootLayoutComponent} from './layouts/root-layout/root-layout.component';
import {UserPageComponent} from './pages/user-page/user-page.component';
import {HeaderComponent} from './components/header/header.component';

const routes: Routes = [
    {
        path: '', component: RootLayoutComponent, children: [
            {
                path: '', redirectTo: 'users', pathMatch: 'full'
            },
            {
                path: 'users', component: UserPageComponent, children: [
                    {
                        path: ':id', component: UserDetailsComponent
                    }
                ]
            },

        ]
    }
]

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent,
        UserDetailsComponent,
        RootLayoutComponent,
        UserPageComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
