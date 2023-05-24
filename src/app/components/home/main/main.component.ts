import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
      tudo: object[] = [
            {
                  title: 'Free Fire',
                  campeonatoCard: [
                        {
                              img: '../../../../assets/img/image1.png',
                              premio: 'R$ 300',
                              entrada: 'R$ 50',            
                        },
                        {
                              img: '../../../../assets/img/image2.png',
                              premio: 'R$ 400',
                              entrada: 'R$ 20',
                        },
                        {
                              img: '../../../../assets/img/image3.png',
                              premio: 'R$ 1000',
                              entrada: 'R$ 100',
                        }
                  ]
            },
            {
                  title: 'Valorant',
                  campeonatoCard: [
                        {
                              img: '../../../../assets/img/image1.png',
                              premio: 'R$ 300',
                              entrada: 'R$ 50',
                        },
                        {
                              img: '../../../../assets/img/image2.png',
                              premio: 'R$ 400',
                              entrada: 'R$ 20',
                        },
                        {
                              img: '../../../../assets/img/image3.png',
                              premio: 'R$ 1000',
                              entrada: 'R$ 100',
                        }
                  ]
            },
            {
                  title: 'League of Legends',
                  campeonatoCard: [
                        {
                              img: '../../../../assets/img/image1.png',
                              premio: 'R$ 300',
                              entrada: 'R$ 50',
                        },
                              {
                              img: '../../../../assets/img/image2.png',
                              premio: 'R$ 400',
                              entrada: 'R$ 20',
                        },
                              {
                              img: '../../../../assets/img/image3.png',
                              premio: 'R$ 1000',
                              entrada: 'R$ 100',
                        }
                  ]
            }
      ]
}


