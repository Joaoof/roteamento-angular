import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-protegiada',
  templateUrl: './pagina-protegiada.component.html',
  styleUrls: ['./pagina-protegiada.component.css']
})
export class PaginaProtegiadaComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
    this.router.navigate([""])
  }

}
