import { Component, OnInit } from '@angular/core';
import { SocioService } from '../socio.service';
import { Socio } from '../socio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-socio',
  templateUrl: './create-socio.component.html',
  styleUrls: ['./create-socio.component.css']
})
export class CreateSocioComponent implements OnInit {

  socio: Socio = new Socio();

  constructor(private socioService: SocioService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.socioService.createSocio(this.socio).subscribe(
      data => this.router.navigate(['/list'])
    );
  }
}
