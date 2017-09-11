import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {UserComponent} from "./user/user.component";
import {PostsService} from "./services/posts.service";
import {AboutComponent} from "./about/about.component";
import {routing} from "./app.routing";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        UserComponent,
        AboutComponent
    ],
    providers: [PostsService],
    bootstrap: [AppComponent]
})
export class AppModule {

}