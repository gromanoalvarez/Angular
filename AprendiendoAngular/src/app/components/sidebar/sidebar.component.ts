import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public searchString!: string; //lo voy a rellenar por el ngModel de la vista

  constructor(private _router:Router, private _route:ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

  goSearch(){
    // para que me redirija tengo que usar el import de ruter 
    this._router.navigate(['/buscar', this.searchString]);
  }

}
