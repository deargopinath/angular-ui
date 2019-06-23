import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.rough-work',
  templateUrl: '../../templates/rough-work.html'
})
export class RoughWork implements OnInit {

  username: string

  constructor() { 
    this.username = ''

  }

  ngOnInit() {

  }

  validUser(): boolean {
    return (this.username.length > 0)
  }

  resetUsername(): void {
    this.username = ''
  }

  getUsername(): string {
    return this.username
  }

}
