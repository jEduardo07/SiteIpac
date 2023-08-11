import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, CommonModule ],
})
export class ProductComponent {

  constructor(private router: Router) { }

  verDetalhes(imovelId: string) {
    this.router.navigate(['/', imovelId]);
  }

  toggleFavorito(index: number): void {
    this.produtos[index].favorito = !this.produtos[index].favorito;
  }

  nome: string = 'Pedro';
  sobrenome: string = 'dos Santos';
  data: any = new Date();
  produtos: Array<any> = [
    {
      id: 1,
      titulo: 'Iphone 14',
      foto: 'https://i.ibb.co/L85LJVP/Iphone14-Pro-Max.jpg',
      memoria: '168 GB',
      ram: '4 GB',
      sistema: 'iOS 15',
      preco: 7000,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Iphone 13',
      foto: 'https://ibb.co/fdG3fPm',
      memoria: '2 GB',
      ram: '1 GB',
      sistema: 'iOS 14',
      preco: 120000,
      favorito: false
    },
    {
      id: 3,
      titulo: 'Mecbook Air13',
      foto: 'https://ibb.co/wwV4wX6',
      memoria: 7,
      ram: 5,
      sistema: 800,
      preco: 1500000,
      favorito: false
    },
    {
      id: 4,
      titulo: 'MecBook Pro 16',
      foto: 'https://ibb.co/ZTWVShY',
      memoria: 1,
      ram: 1,
      sistema: 36,
      preco: 180000,
      favorito: false
    },
    {
      id: "rg93h8eirbgrebngn",
      titulo: 'Ipad air 5',
      foto: 'https://ibb.co/JnhmW1n',
      memoria: 0,
      ram: 1,
      sistema: 25,
      preco: 250000,
      favorito: true
    },
    {
      id: "8493ty34hg489gh",
      titulo: 'Ipad Pro',
      foto: 'https://i.ibb.co/gwmBS1H/card4.jpg',
      memoria: 3,
      ram: 3,
      sistema: 200,
      preco: 1500000,
      favorito: true
    }
  ];
}