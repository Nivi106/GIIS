import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent implements OnInit {
  markers = []
    
   
  title = 'image-gallery';
  private data:any = []
  
  constructor(private http: HttpClient) {
    
  }
  
 
  
    
    getData(){
      const url = "http://127.0.0.1:8000/crime"
      this.http.get(url).subscribe((res)=>{
        this.data = res
        console.log(this.data)
      })
    }
    
  

    ngOnInit() {
      this.getData()
    }

}

