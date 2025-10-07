
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina',
  imports: [],
  templateUrl: './pagina.html',
  styleUrl: './pagina.css'
})
export class Pagina {
  constructor() {}

  // Função para navegação suave e fechar o menu lateral
  navegarPara(id: string) {
    this.fecharMenuLateral();
    let tentativas = 0;
    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (tentativas < 10) {
        tentativas++;
        setTimeout(scrollToTarget, 100);
      } else {
        window.location.hash = '#' + id;
      }
    };
    setTimeout(scrollToTarget, 300);
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
