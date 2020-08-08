import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Criado por <b><a href="http://www.techmatter.com.br/" target="_blank">TechMatter</a></b> 
    </span>

  `,
})
export class FooterComponent {
}
