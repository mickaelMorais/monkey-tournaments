import { Component } from '@angular/core';

@Component({
  selector: 'app-chaveamento',
  templateUrl: './chaveamento.component.html',
  styleUrls: ['./chaveamento.component.css']
})
export class ChaveamentoComponent {
      esquerdo = 'esquerdo'
      direito = 'direito'
      equipes = [
            [
                  {
                        equipe1: 'Equipe 1',
                        equipe2: 'Equipe 2',
                        numEquipe: [1, 2]
                  },
                  {
                        equipe1: 'Equipe 3',
                        equipe2: 'Equipe 4',
                        numEquipe: [3, 4]
                  },
                  {
                        equipe1: 'Equipe 5',
                        equipe2: 'Equipe 6',
                        numEquipe: [5, 6]
                  },
                  {
                        equipe1: 'Equipe 7',
                        equipe2: 'Equipe 8',
                        numEquipe: [7, 8]
                  }
            ],
            [
                  {
                        equipe1: 'Equipe 9',
                        equipe2: 'Equipe 10',
                        numEquipe: [9, 10]
                  },
                  {
                        equipe1: 'Equipe 11',
                        equipe2: 'Equipe 12',
                        numEquipe: [11, 12]
                  },
                  {
                        equipe1: 'Equipe 13',
                        equipe2: 'Equipe 14',
                        numEquipe: [13, 14]
                  },
                  {
                        equipe1: 'Equipe 15',
                        equipe2: 'Equipe 16',
                        numEquipe: [15, 16]
                  }

            ]
      ]
}
