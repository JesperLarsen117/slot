import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slot",
  templateUrl: "./slot.component.html",
  styleUrls: ["./slot.component.scss"],
})
export class SlotComponent implements OnInit {
  symbols: any = [
    { value: 0, symbol: "../../assets/images/symbols/Asset1.svg" },
    { value: 1, symbol: "../../assets/images/symbols/Asset11.svg" },
    { value: 2, symbol: "../../assets/images/symbols/Asset3.svg" },
    { value: 3, symbol: "../../assets/images/symbols/Asset4.svg" },
    { value: 4, symbol: "../../assets/images/symbols/Asset5.svg" },
    { value: 5, symbol: "../../assets/images/symbols/Asset6.svg" },
    { value: 6, symbol: "../../assets/images/symbols/Asset7.svg" },
    { value: 7, symbol: "../../assets/images/symbols/Asset8.svg" },
    { value: 8, symbol: "../../assets/images/symbols/Asset9.svg" },
    { value: 9, symbol: "../../assets/images/symbols/Asset10.svg" },
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

  // LINES

  _line = [];
  constructor() {}

  ngOnInit(): void {}

  spin() {
    for (let i = 0; i < 20; i++) {
      if (this.SymbolHolder != undefined) {
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
    this.checkWin(this.savedSymbols);
    this.SymbolHolder = this.SymbolHolder.concat(this.savedSymbols);
    this.savedSymbols = [];
    setTimeout(() => {
      this.activeSpin = false;
    }, 3200);
  }

  checkWin(symbols) {
    console.log(symbols);
  }
  disableSpin() {}
}
