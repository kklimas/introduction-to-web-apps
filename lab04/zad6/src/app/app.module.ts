import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopicsListComponent } from './components/topics-list/topics-list.component';
import { ChosenTopicComponent } from './components/chosen-topic/chosen-topic.component';
import { TopicComponent } from './components/topic/topic.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsListComponent,
    ChosenTopicComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
