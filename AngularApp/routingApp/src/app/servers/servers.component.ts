import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
// import { relative } from 'path';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  allowEdit;
  onUrl(server: any) {
    this.router.navigateByUrl(
      // `http://localhost:4200/servers/1/edit?${'allowEdit =server.id'}#${'loading'}}`,
      `servers/${server.id}/edit?allowEdit=${server.id}#loading`,
      {
        state: { server },
      }
    );
    // this.router.navigate(['/server', 'edit'], {
    //   queryParams: { allowEdit: server.id },
    //   fragment: 'loading',
    // });
  }
  // http://localhost:4200/servers/1/edit?allowEdit=1#loading
  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }
  onReload() {
    // this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
