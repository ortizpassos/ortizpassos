import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-servico-detalhe',
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  template: `
    <div class="container py-4" style="max-width: 900px;">
      <a routerLink="/" class="btn btn-link px-0 mb-3">← Voltar</a>
      <div class="card shadow-sm">
        <div class="card-body">
          <h1 class="h3 fw-bold mb-3">{{ titulo() }}</h1>
          <p class="text-muted mb-0">Destaque do serviço</p>
        </div>
      </div>
      @if (imageSrc()) {
        <div class="mt-3">
          <img
            [ngSrc]="imageSrc()!"
            width="800"
            height="450"
            class="img-fluid rounded shadow-sm"
            [alt]="titulo()"
            priority>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicoDetalheComponent {
  private route = inject(ActivatedRoute);

  slug = computed(() => this.route.snapshot.paramMap.get('slug') ?? '');

  titulo = computed(() => {
    const s = this.slug();
    const map: Record<string, string> = {
      'autoclaves': 'Autoclaves',
      'cadeiras-odontologicas': 'Cadeiras Odontológicas',
      'compressores-e-bombas-vacuo': 'Compressores e Bombas de Vácuo',
      'pecas-de-mao': 'Peças de Mão',
      'instalacao-e-revisao': 'Instalação e Revisão',
      'atendimento-emergencial': 'Atendimento Emergencial',
      'agendamento-flexivel': 'Agendamento Flexível',
      'equipe-tecnica-qualificada': 'Equipe Técnica Qualificada',
      'pecas-originais-e-garantia': 'Peças Originais e Garantia',
    };
    return map[s] ?? s;
  });

  // Map de imagens por serviço (use um arquivo existente como placeholder)
  imageSrc = computed(() => {
    const s = this.slug();
    const map: Record<string, string> = {
      // Substitua por 'assets/autoclaves.jpg' quando o arquivo estiver disponível
      'autoclaves': 'assets/fundo.jpg',
    };
    return map[s] ?? null as unknown as string | null;
  });
}
