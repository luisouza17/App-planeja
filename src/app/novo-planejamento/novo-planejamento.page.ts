import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-novo-planejamento',
  templateUrl: './novo-planejamento.page.html',
  styleUrls: ['./novo-planejamento.page.scss'],
})
export class NovoPlanejamentoPage implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {
  }
  salvar(form){
   
      const nomePlaneja = form.value.nome;
      const nomeFatura = form.value.fatura;
      const nomeCusto = form.value.custo;

      console.log("");
      
      form.reset();

      this.nav.back();
  }

}
