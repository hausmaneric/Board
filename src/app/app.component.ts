import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardService } from './cards.service';
import { InputNumberModule } from 'primeng/inputnumber';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputNumberModule, HttpClientModule, FormsModule],
  providers: [CardService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tabuleiro';
  started: boolean = false;
  cards: any[] = [];
  casa: number | undefined;
  visibleItem: boolean = false;

  itemForm: any = {}

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.loadCards();
  }

  loadCards() {
    this.cardService.getCards().subscribe((data: any) => {
      this.cards = data;
    });
  }

  setStarted(){
    this.started = true;
  }

  locateItem(casa: number){
    this.itemForm    = this.cards.find((item: any) => item.Casa === casa);
    this.visibleItem = true;
  }

  setVisible(){
    this.visibleItem = false;
  }
}
