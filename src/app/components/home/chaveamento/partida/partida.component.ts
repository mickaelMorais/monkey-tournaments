import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-partida',
  templateUrl: 'partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent {
      @Input() nomeEquipe1!: string
      @Input() nomeEquipe2!: string
      @Input() lado!: string
      @Input() numberEquipe!: number[]


      getWinner(element: any){
            let equipeDerrotada: Element | null
            let equipeVencedora = element
            if(element.id === (`equipe-${this.numberEquipe[0]}`)){
                  equipeDerrotada = document.querySelector(`#equipe-${this.numberEquipe[1]}`)
                  console.log('asdofh')
            }
            else{
                  equipeDerrotada = document.querySelector(`#equipe-${this.numberEquipe[0]}`)
                  console.log('asdofh')
            }
            
            if(equipeDerrotada){
                  equipeDerrotada.classList.add('derrotado')
                  equipeVencedora.classList.remove('derrotado')
            }

            return equipeVencedora
      }

}
