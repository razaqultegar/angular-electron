import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: '../templates/front.html'
})

export class FrontComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void { }
}
