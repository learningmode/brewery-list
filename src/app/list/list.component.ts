import { Component, OnInit } from '@angular/core';
import { CustomhttpService } from '../customhttp.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  brew: Object;
  constructor(private _http: CustomhttpService) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data =>{
      this.brew = data;
      console.log(this.brew);
    });
  }

}
