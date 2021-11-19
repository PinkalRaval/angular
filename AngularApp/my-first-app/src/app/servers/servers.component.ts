import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  ngOnInit(): void {}
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created!' + this.serverName;
    this.servers.push(this.serverName);
    // setTimeout(() => {
    //   this.allowServer = false;
    // }, 2000);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
}
