import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectrole',
  templateUrl: './selectrole.component.html',
  styleUrls: ['./selectrole.component.scss'],
  standalone: false,
})
export class SelectroleComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  selectRole(role: string) {
    if (role === 'patient') {
      this.router.navigate(['/patient']);
    } else if (role === 'doctor') {
      this.router.navigate(['/doctor']);
    }
  }
}
