import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `<h1>HELLO</h1>
  <br>
  <div class="">
    {{date}}
</div>
  
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title ='home';

  date =new Date ();

}

// ./home.component.html
