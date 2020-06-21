import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slot",
  templateUrl: "./slot.component.html",
  styleUrls: ["./slot.component.scss"],
})
export class SlotComponent implements OnInit {
  symbols: any = [
    { value: 2, symbol: "../../assets/images/symbols/Asset1.svg" },
    { value: 3, symbol: "../../assets/images/symbols/Asset11.svg" },
    { value: 4, symbol: "../../assets/images/symbols/Asset3.svg" },
    { value: 5, symbol: "../../assets/images/symbols/Asset4.svg" },
    { value: 6, symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: 7, symbol: "../../assets/images/symbols/Asset6.svg" },
    { value: 8, symbol: "../../assets/images/symbols/Asset7.svg" },
    { value: 9, symbol: "../../assets/images/symbols/Asset8.svg" },
    { value: 10, symbol: "../../assets/images/symbols/Asset9.svg" },
    { value: 11, symbol: "../../assets/images/symbols/Asset10.svg" },
  ];

  SymbolHolder = [
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: "placeholder", symbol: "../../assets/images/symbols/Asset5.svg" },
  ];
  savedSymbols = [];
  activeSpin = false;
  currentSymbol = [];
  // LINES

  line1 = [
    {
      row1: [1, 1, 0, 0, 0]
    }
  ];
  constructor() { }

  ngOnInit(): void { }

  spin() {
    const spinAudio = document.getElementById('audio') as any;
    spinAudio.play();
    for (let i = 0; i < 20; i++) {
      if (this.SymbolHolder !== undefined) {
        this.savedSymbols.push(this.SymbolHolder[i]);
      }
    }
    this.activeSpin = true;
    this.SymbolHolder = [];
    for (let i = 0; i < 180; i++) {
      let r = Math.random() * 10;
      r = Math.floor(r);
      this.SymbolHolder.push(this.symbols[r]);
    }
    for (let i = 0; i < 20; i++) {
      if (this.SymbolHolder !== undefined) {
        this.currentSymbol.push(this.SymbolHolder[i]);
      }
    }
    this.checkWin(this.currentSymbol);
    this.currentSymbol = [];
    this.SymbolHolder = this.SymbolHolder.concat(this.savedSymbols);
    this.savedSymbols = [];
    setTimeout(() => {
      this.activeSpin = false;
    }, 3200);
  }

  checkWin(symbols) {
    console.log(symbols);
    // Not working yet. So you can't win :D
  }

}
