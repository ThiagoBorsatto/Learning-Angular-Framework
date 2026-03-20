import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  standalone: false,
  templateUrl: './servers.html',
  styleUrl: './servers.css',
  import: [ServerComponent],
})
export class Servers {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was create!'
  }

  onUpdateServerName(serverName: string) {
    console.log(serverName);
    this.serverName = (<HTMLInputElement>serverName.target).value;
    
  }
}
