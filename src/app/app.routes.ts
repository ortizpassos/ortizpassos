import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', loadComponent: () => import('./pagina/pagina').then(m => m.Pagina) },
			{ path: 'servico/:slug', loadComponent: () => import('./servico-detalhe/servico-detalhe').then(m => m.ServicoDetalheComponent) },
	{ path: '**', redirectTo: '' }
];
