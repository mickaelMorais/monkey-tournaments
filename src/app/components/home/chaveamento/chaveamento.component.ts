import { Component } from '@angular/core';

@Component({
  selector: 'app-chaveamento',
  templateUrl: './chaveamento.component.html',
  styleUrls: ['./chaveamento.component.css']
})
export class ChaveamentoComponent{
      esquerdo = 'esquerdo'
      direito = 'direito'
      equipesChave1 = [
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
      ]     

      equipesChave2 = [
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

      vencedoresOitavas1 = [
            {
                  equipe1: 'Equipe 2',
                  equipe2: 'Equipe 3',
                  numEquipe: [17, 18]
            },
            {
                  equipe1: 'Equipe 5',
                  equipe2: 'Equipe 7',
                  numEquipe: [19, 20]
            }
      ]

      vencedoresOitavas2 = [
            {
                  equipe1: 'Equipe 9',
                  equipe2: 'Equipe 12',
                  numEquipe: [21, 22]
            },
            {
                  equipe1: 'Equipe 14',
                  equipe2: 'Equipe 15',
                  numEquipe: [23, 24]
            }
      ]

      vencedoresQuartas1 = {
                  equipe1: 'Equipe 3',
                  equipe2: 'Equipe 7',
                  numEquipe: [25, 26]
      }
      
      vencedoresQuartas2 = {
                  equipe1: 'Equipe 9',
                  equipe2: 'Equipe 15',
                  numEquipe: [27, 28]
      }

      finalistas = {
            equipe1: 'Equipe 7',
            equipe2: 'Equipe 9',
            numEquipe: [29, 30]
      }
            getWinner(element: any, index: number){
                  let grandpaElement = element.parentNode.parentNode
                  let equipeDerrotada!: Element | null
                  let equipeVencedora = element
                  // let equipeDerrotadaQuartas!: Element | null
                  // let equipeVencedoraQuartas = element
                  // let equipeDerrotadaSemi!: Element | null
                  // let equipeVencedoraSemi = element

                  if(grandpaElement.classList.contains('oitavas')){
                        if(element.classList.contains('chave1')){
                              if(element.classList.contains(`equipe-${this.equipesChave1[index].numEquipe[0]}`)){
                                    equipeDerrotada = document.querySelector(`.equipe-${this.equipesChave1[index].numEquipe[1]}`)
                              }
                              else{
                                    equipeDerrotada = document.querySelector(`.equipe-${this.equipesChave1[index].numEquipe[0]}`)
                              }
                        }
                        else{
                              if(element.classList.contains(`equipe-${this.equipesChave2[index].numEquipe[0]}`)){
                                    equipeDerrotada = document.querySelector(`.equipe-${this.equipesChave2[index].numEquipe[1]}`)
                              }
                              else{
                                    equipeDerrotada = document.querySelector(`.equipe-${this.equipesChave2[index].numEquipe[0]}`)
                              }
                        }
                  }
                  else if(grandpaElement.classList.contains('quartas')){
                        if(element.classList.contains('chave1')){
                              if(element.classList.contains(`equipe-${this.vencedoresOitavas1[index].numEquipe[0]}`)){
                                    equipeDerrotada = document.querySelector(`.equipe-${this.vencedoresOitavas1[index].numEquipe[1]}`)
                              }
                              else{
                                    equipeDerrotada = document.querySelector(`.equipe-${this.vencedoresOitavas1[index].numEquipe[0]}`)
                              }
                        }
                        else{
                              if(element.classList.contains(`equipe-${this.vencedoresOitavas2[index].numEquipe[0]}`)){
                                    equipeDerrotada = document.querySelector(`.equipe-${this.vencedoresOitavas2[index].numEquipe[1]}`)
                              }
                              else{
                                    equipeDerrotada = document.querySelector(`.equipe-${this.vencedoresOitavas2[index].numEquipe[0]}`)
                              }
                        }
                        
                  }
                  else if(grandpaElement.classList.contains('semi-final')){
                        if(element.classList.contains('chave1')){
                              if(element.classList.contains(`equipe-${this.vencedoresQuartas1.numEquipe[0]}`)){
                                    equipeDerrotada = document.querySelector(`.equipe-${this.vencedoresQuartas1.numEquipe[1]}`)
                              }
                              else{
                                    equipeDerrotada = document.querySelector(`.equipe-${this.vencedoresQuartas1.numEquipe[0]}`)
                              }
                        }
                        else{
                              if(element.classList.contains(`equipe-${this.vencedoresQuartas2.numEquipe[0]}`)){
                                    equipeDerrotada = document.querySelector(`.equipe-${this.vencedoresQuartas2.numEquipe[1]}`)
                              }
                              else{
                                    equipeDerrotada = document.querySelector(`.equipe-${this.vencedoresQuartas2.numEquipe[0]}`)
                              }
                        }
                  }
                  else{
                        if(element.classList.contains('chave1')){
                              if(element.classList.contains(`equipe-${this.finalistas.numEquipe[0]}`)){
                                    equipeDerrotada = document.querySelector(`.equipe-${this.finalistas.numEquipe[1]}`)
                              }
                              else{
                                    equipeDerrotada = document.querySelector(`.equipe-${this.finalistas.numEquipe[0]}`)
                              }
                        }
                        else{
                              if(element.classList.contains(`equipe-${this.finalistas.numEquipe[0]}`)){
                                    equipeDerrotada = document.querySelector(`.equipe-${this.finalistas.numEquipe[1]}`)
                              }
                              else{
                                    equipeDerrotada = document.querySelector(`.equipe-${this.finalistas.numEquipe[0]}`)
                              }
                        }
                        alert(`O campeaão do campeonato é a ${equipeVencedora.textContent}`)

                  }
                  // derrotados oitavas
                  if(equipeDerrotada){
                        equipeDerrotada.classList.add('derrotado')
                        equipeVencedora.classList.remove('derrotado')
                  }
                  
                  // if(equipeDerrotadaQuartas){
                  //       equipeDerrotadaQuartas.classList.add('derrotado')
                  //       equipeVencedoraQuartas.classList.remove('derrotado')

                  // }
                  // if(equipeDerrotadaSemi){
                  //       equipeDerrotadaSemi.classList.add('derrotado')
                  //       equipeVencedoraSemi.classList.remove('derrotado')

                  // }
                  
                  
            }
      

      // ngOnInit(){
      //       const  oitavas1 = document.querySelector('#oitavas-1')
      //       const oitavas2 = document.querySelector('#oitavas-2')

      //       this.equipesChave1.forEach((equipe) => {
      //             if(oitavas1){
      //                   console.log(equipe)
      //                   oitavas1.innerHTML += `<app-partida [nomeEquipe1]="${equipe.equipe1}" [nomeEquipe2]="${equipe.equipe2}" [lado]="${this.esquerdo}" [numberEquipe]="${equipe.numEquipe}"></app-partida>`
      //             }
      //       })
      // }
}
