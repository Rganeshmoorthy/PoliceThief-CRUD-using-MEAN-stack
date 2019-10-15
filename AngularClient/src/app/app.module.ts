//built-in directives
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Component-directives
import { AppComponent } from './app.component';
import { ThiefDetailsComponent } from './thief-details/thief-details.component';

//routes
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ThiefDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
