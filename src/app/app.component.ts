import { Component, OnChanges, OnInit } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private ps : PlacesService){}
  ngOnInit(): void {
   this.ps.initService();
  }

  activenav (e) : void {
    let li = document.body.getElementsByTagName("li");
    console.log(e);
    console.log(li);
    for (var i in li){
      if(!isNaN(parseInt(i))){
        console.log(i);
        console.log(li[i].innerText);
        console.log(e.srcElement.innerText);
        if(e.srcElement.innerText ==  "Iniciar Sesion"){
          li[i].classList.remove('active');

        } else
        if(li[i].innerText.trim() != e.srcElement.innerText){
          li[i].classList.remove('active');
        } else {
          console.log("activos")
          li[i].classList.add('active');
        }
      }
    }
  }

  title = 'app';
}
