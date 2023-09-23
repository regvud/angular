import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../../services/posts.service";
import {IPost} from "../../../interfaces/post.interface";

@Component({
    selector: 'app-post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
    post: IPost

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private postsService: PostsService) {
        this.activatedRoute.params.subscribe(({id}) => {
            const state = this.router.getCurrentNavigation()?.extras.state as IPost;

            if (state) {
                this.post = state
            } else {
                this.postsService.byID(id).subscribe(value => this.post = value)
            }
        })
    }
}
