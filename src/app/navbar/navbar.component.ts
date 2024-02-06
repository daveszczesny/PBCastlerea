import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  // used to added router for navigation
  constructor(private router: Router){}

  /* Navigate back home */
goHome() {
 this.router.navigate(['']) 
}

goFacebook(){
  window.open('https://www.facebook.com/pedicureCastlerea/');
}

goInsta(){
  window.open('https://www.instagram.com/pedicure_browscastlerea/');
}

instagram_img: string = "../../assets/instagram.png";
facebook_img: string = "../../assets/facebook.png"
logo_img: string = "../../assets/logo-image.png"



}

