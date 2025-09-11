import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-servico-detalhe',
  imports: [CommonModule, RouterLink, TranslateModule, NgOptimizedImage],
  template: `
    <div class="container py-4" style="max-width: 900px;">
      <a routerLink="/" class="btn btn-link px-0 mb-3">← Voltar</a>
      <div class="card shadow-sm">
        <div class="card-body">
          <h1 class="h3 fw-bold mb-3">{{ titulo() }}</h1>
          <p class="text-muted mb-0">{{ 'DESTAQUE' | translate }}</p>
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
  protected translate = inject(TranslateService);

  slug = computed(() => this.route.snapshot.paramMap.get('slug') ?? '');

  titulo = computed(() => {
    const s = this.slug();
    const map: Record<string, string> = {
      'autoclaves': this.translate.instant('EQUIPAMENTOS.SERVICO1'),
      'cadeiras-odontologicas': this.translate.instant('EQUIPAMENTOS.SERVICO2'),
      'compressores-e-bombas-vacuo': this.translate.instant('EQUIPAMENTOS.SERVICO3'),
      'pecas-de-mao': this.translate.instant('EQUIPAMENTOS.SERVICO4'),
      'instalacao-e-revisao': this.translate.instant('EQUIPAMENTOS.SERVICO5'),
      'atendimento-emergencial': this.translate.instant('ATENDIMENTO.SERVICO1'),
      'agendamento-flexivel': this.translate.instant('ATENDIMENTO.SERVICO2'),
      'equipe-tecnica-qualificada': this.translate.instant('ATENDIMENTO.SERVICO3'),
      'pecas-originais-e-garantia': this.translate.instant('ATENDIMENTO.SERVICO4'),
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
