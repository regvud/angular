import {Component, Input} from '@angular/core';
import {IPost} from "../../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent {
    @Input()
    post: IPost

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    }

    getPostDetail() {
        this.router.navigate([this.post.id], {state: this.post, relativeTo: this.activatedRoute})
    }
}
