import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private usersService: UsersService) {
      this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.usersService.save(this.user).subscribe(result => this.goToUsersList());
  }

  goToUsersList() {
    this.router.navigate(['/users']);
  }

}
