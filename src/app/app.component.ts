import { Component } from '@angular/core';
import { subjects } from '../services/app.services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _appService: subjects) { }
  title = 'app';
  name: any;
  ngOnInit(): void {
    this._appService.getHttpRequest().subscribe((res) => {
      this.name = res;
    });
  }
  addSubject(newSubject: string) {
    if (newSubject) {
      this._appService.postHttpRequest({name: newSubject,
        categoryid: 1
        }).subscribe((res)=>{
         if(res.name){
          this.name.push(res);
         }
        
      })
    }
  }


}
