import {Component, Input} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: IUser

  //
  // @Output()
  // liftUser = new EventEmitter<IUser>()
  // getDetails(): void {
  //   this.liftUser.emit(this.user)
  // }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  getDetail(): void {
    this.router.navigate([this.user.id], {relativeTo: this.activatedRoute, state: this.user})
  }
}
