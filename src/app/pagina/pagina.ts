import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-pagina',
  imports: [TranslateModule],
  templateUrl: './pagina.html',
  styleUrl: './pagina.css'
})
export class Pagina {
  constructor(public translate: TranslateService) {
    // Obter o idioma do navegador
    let idiomaNavegador = navigator.language;
    if (idiomaNavegador !== 'pt-BR' && idiomaNavegador !== 'en-US') {
      idiomaNavegador = 'pt-BR';
    }
    this.translate.use(idiomaNavegador);
    console.log('Idioma inicial:', idiomaNavegador);
  }

  // Função para alterar o idioma
  alterarIdioma(idioma: string) {
    this.translate.use(idioma);
    
  }

}
