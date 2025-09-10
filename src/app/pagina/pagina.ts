
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

  // Função para navegação suave e fechar o menu lateral
  navegarPara(id: string) {
    this.fecharMenuLateral();
    setTimeout(() => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.hash = '#' + id;
      }
    }, 250);
  }

  fecharMenuLateral() {
    const offcanvasEl = document.getElementById('mobileMenu');
    if (offcanvasEl && offcanvasEl.classList.contains('show')) {
      // @ts-ignore
      const bsOffcanvas = (window as any).bootstrap?.Offcanvas?.getOrCreateInstance(offcanvasEl);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  }

  abrirWhatsapp(event: Event) {
    event.preventDefault();
    this.fecharMenuLateral();
    setTimeout(() => {
      window.open('https://wa.me/5547999876298', '_blank', 'noopener');
    }, 250);
  }

}
