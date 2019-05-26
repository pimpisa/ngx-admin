import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <div class="left">
      <span class="created-by">Copyright © 2019</span>  · 
      <span class="created-by"> <a href="#" target="_blank">Terms and Conditions</a></span>  · 
      <a href="#" target="_blank">Privacy Policy</a>  · 
      <a href="#" target="_blank">Language</a>
    </div>

    <div class="right socials">
    Powered by <img src=""><a><img class="logo" src="../assets/images/edgagement.png"> </a>
    </div>
  `,
})
export class FooterComponent {
}

//Copyright © 2019 · Terms and Conditions · Privacy Policy · Language: 