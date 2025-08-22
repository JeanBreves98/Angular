import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { UiModule } from "./ui/card/ui.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, UiModule, TasksModule]
})
export class AppModule {

}