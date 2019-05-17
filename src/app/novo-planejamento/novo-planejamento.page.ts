import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  salvar(form) {

    const planejamentoString = JSON.stringify(form.value)

    const nomePlaneja = form.value.nome;
    const nomeFatura = form.value.faturamento;
    const nomeCusto = form.value.custo;

    localStorage.setItem(nomePlaneja,planejamentoString);

    console.log(nomePlaneja, nomeFatura, nomeCusto);

    form.reset();

    this.nav.back();
  }

}
