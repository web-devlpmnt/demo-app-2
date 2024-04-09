import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  serverElements = [];
  type = '';

  onServerAdded(event) {
    this.serverElements.push({
      type: 'server',
      name: event.serverName,
      content: event.serverContent,
    });
  }

  onBlueprintAdded(event) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.serverName,
      content: event.serverContent,
    });
  }
}
