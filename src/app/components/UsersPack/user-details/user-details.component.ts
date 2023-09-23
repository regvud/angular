import {Component} from '@angular/core';
import {IUser} from "../../../interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../services/users.service";

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
    user: IUser

    constructor(private router: Router, activatedRoute: ActivatedRoute, private usersService: UsersService) {
        activatedRoute.params.subscribe(({id}) => {
            const state = this.router.getCurrentNavigation()?.extras.state as IUser;

            if (state) {
                this.user = state

            } else {
                this.usersService.byID(id).subscribe(value => this.user = value)
            }
        })
    }
}
