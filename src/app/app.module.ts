import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { ServerComponent } from './server/server.component';
import { MemoriesComponent } from './memories/memories.component';
import { MsgsuccessComponent } from './msgsuccess/msgsuccess.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    MemoriesComponent,
    MsgsuccessComponent,
    RegisteruserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    ServerComponent,
    MemoriesComponent]
})
export class AppModule { }
