import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Injectable()

export class subjects {
    constructor(private _http : Http){}
    subjects: any = [];
    getSubjects(): any {
        return this.subjects;
    };

    getHttpRequest():any{
        return this._http.get("https://api.dev.talentscreen.io/v1/subjects")
        .map((response: Response) => response.json())
        .do((res : Response)=>this.subjects = res);
    };

    postHttpRequest(body):any{
        return this._http.post("https://api.dev.talentscreen.io/v1/subjects?authentication=false",body)
        .map((response: Response) => response.json())
        .do((res : Response)=>this.subjects = res);
    }
}