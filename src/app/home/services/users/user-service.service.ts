import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { user } from "../../types/user.type";
import { Observable } from "rxjs";

@Injectable()
export class UserService {
    constructor(private httpClient: HttpClient) {}

    createUser(user: user): Observable<any> {
        const url: string = 'http://localhost:5001/users/signup';
        return this.httpClient.post(url, user);
    }
}