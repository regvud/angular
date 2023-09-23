import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../interfaces/post.interface";
import {urls} from "../constants/urls";

@Injectable({
    providedIn: 'root'
})
export class PostsService {

    constructor(private httpClient: HttpClient) {
    }

    getAllPosts(): Observable<IPost[]> {
        return this.httpClient.get<IPost[]>(urls.posts.base)
    }

    byID(id: number): Observable<IPost> {
        return this.httpClient.get<IPost>(urls.posts.byID(id))
    }
}
