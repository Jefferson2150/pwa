import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from './Service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router, private service:ServiceService){}
  
  ngOnInit(): void {
    //if(!sessionStorage.getItem("variableInicio")){
      //  this.router.navigate([""]);
    //}
  }
  title = 'sistema-servicios-generales';
}
