import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app.component';
import {UsersComponent} from './components/UsersPack/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/UsersPack/user/user.component';
import {UserDetailsComponent} from './components/UsersPack/user-details/user-details.component';
import {RouterModule, Routes} from "@angular/router";
import {RootLayoutComponent} from './layouts/root-layout/root-layout.component';
import {UserPageComponent} from './pages/Users/user-page/user-page.component';
import {HeaderComponent} from './components/header/header.component';
import {UserDetailsPageComponent} from './pages/Users/user-details-page/user-details-page.component';
import {PostsPageComponent} from './pages/Posts/posts-page/posts-page.component';
import {PostsComponent} from './components/PostsPack/posts/posts.component';
import {PostComponent} from './components/PostsPack/post/post.component';
import {PostDetailComponent} from './components/PostsPack/post-detail/post-detail.component';
import {PostsDetailsPageComponent} from './pages/Posts/posts-details-page/posts-details-page.component';

const routes: Routes = [
    {
        path: '', component: RootLayoutComponent, children: [
            {
                path: '', redirectTo: 'users', pathMatch: 'full'
            },
            {
                path: 'users', component: UserPageComponent, children: [
                    {
                        path: ':id', component: UserDetailsPageComponent
                    }
                ]
            },
            {
                path: 'posts', component: PostsPageComponent, children: [
                    {
                        path: ':id', component: PostsDetailsPageComponent
                    }
                ]
            }

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
        HeaderComponent,
        UserDetailsPageComponent,
        PostsPageComponent,
        PostsComponent,
        PostComponent,
        PostDetailComponent,
        PostsDetailsPageComponent
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
