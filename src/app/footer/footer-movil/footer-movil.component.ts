import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-footer-movil',
  templateUrl: './footer-movil.component.html',
  styleUrls: ['./footer-movil.component.css']
})
export class FooterMovilComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

}
