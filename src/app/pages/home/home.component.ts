import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  template: `<h1>HELLO</h1>
  <br>
  <div class="">
    {{birthDate | date:"d,MMMM,YYYY"}}
</div>
  
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title ='home';

  birthDate =new Date ();

}

// ./home.component.html
