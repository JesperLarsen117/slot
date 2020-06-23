import { Component, OnInit } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-slot",
  templateUrl: "./slot.component.html",
  styleUrls: ["./slot.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SlotComponent implements OnInit {
  symbols: any = [
    {
      value: 2,
      name: "w",
      symbol: "../../assets/images/symbols/Asset1.svg",
      winRate: [2, 4, 6],
    },
    {
      value: 3,
      name: "cl",
      symbol: "../../assets/images/symbols/Asset11.svg",
      winRate: [10, 20, 30],
    },
    {
      value: 4,
      name: "c",
      symbol: "../../assets/images/symbols/Asset3.svg",
      winRate: [1000, 2000, 3000],
    },
    {
      value: 5,
      name: "b",
      symbol: "../../assets/images/symbols/Asset4.svg",
      winRate: [5, 10, 15],
    },
    {
      value: 6,
      name: "7",
      symbol: "../../assets/images/symbols/Asset5.svg",
      winRate: [2000, 4000, 6000],
    },
    {
      value: 7,
      name: "h",
      symbol: "../../assets/images/symbols/Asset6.svg",
      winRate: [100, 200, 300],
    },
    {
      value: 8,
      name: "ch",
      symbol: "../../assets/images/symbols/Asset7.svg",
      winRate: [1, 2, 3],
    },
    {
      value: 9,
      name: "d",
      symbol: "../../assets/images/symbols/Asset8.svg",
      winRate: [200, 300, 400],
    },
    {
      value: 10,
      name: "s",
      symbol: "../../assets/images/symbols/Asset9.svg",
      winRate: [300, 600, 900],
    },
    {
      value: 11,
      name: "sb",
      symbol: "../../assets/images/symbols/Asset10.svg",
      winRate: [4, 8, 12],
    },
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
  winningLines = [];
  winnerLines = [];
  spinTime = 3000;
  // LINES

  lines = [
    [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ], // 1st line
    [
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
    ], // 2nd line
    [
      [0, 2],
      [1, 2],
      [2, 2],
      [3, 2],
      [4, 2],
    ], //3rd line
    [
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
      [4, 3],
    ], //4rd line
    [
      [0, 0],
      [1, 1],
      [2, 0],
      [3, 1],
      [4, 0],
    ], //top zikzak
    [
      [0, 1],
      [1, 0],
      [2, 1],
      [3, 0],
      [4, 1],
    ], //top zikzak
    [
      [0, 1],
      [1, 2],
      [2, 1],
      [3, 2],
      [4, 1],
    ], //top zikzak
    [
      [0, 2],
      [1, 1],
      [2, 2],
      [3, 1],
      [4, 2],
    ], //top zikzak
    [
      [0, 2],
      [1, 3],
      [2, 2],
      [3, 3],
      [4, 2],
    ], //top zikzak
    [
      [0, 3],
      [1, 2],
      [2, 3],
      [3, 2],
      [4, 3],
    ], //top zikzak
  ];

  res = [];
  constructor() {}

  ngOnInit(): void {}

  spin() {
    const spinAudio = document.getElementById("audio") as any;
    spinAudio.play();
    for (let i = 0; i < 20; i++) {
      if (this.SymbolHolder !== undefined) {
        this.savedSymbols.push(this.SymbolHolder[i]);
      }
    }

    this.activeSpin = true;
    this.SymbolHolder = [];

    let winProcent = Math.floor(Math.random() * 100);
    let p = 10;

    if (winProcent <= 5) {
      p = 2;
    } else if (winProcent >= 6 && winProcent <= 15) {
      p = 4;
    } else if (winProcent >= 16 && winProcent <= 30) {
      p = 4;
    } else {
      p = 10;
    }
    console.log("-----WIN PROCENT----");
    console.log("win rate: " + winProcent);
    console.log(p);

    for (let i = 0; i < 180; i++) {
      let r = Math.random() * p;
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
    }, this.spinTime);
  }
  highlightLines = (currentIndex, reels) => {
    if (!this.winningLines.length) {
      return;
    }

    if (currentIndex > 0) {
    }

    if (currentIndex > this.winningLines.length - 1) {
      return;
    }
    const elements = document.getElementsByClassName("symbols") as any;
    for (let i = 0; i < elements.length; i++) {
      // elements[i].style.filter = "grayscale(0)";
    }
    this.lines[this.winningLines[currentIndex]].map((el: any) => {
      const elements = document.getElementsByClassName("symbols") as any;
      // elements[el[0]].style.filter = "grayscale(100%)";
    });
  };
  checkWin(symbols) {
    const symbolss = "bbc";
    let streak = 0;
    let currentKind = null;
    const spinsResult = [
      [symbols[0].name, symbols[5].name, symbols[10].name, symbols[15].name],
      [symbols[1].name, symbols[6].name, symbols[11].name, symbols[16].name],
      [symbols[2].name, symbols[7].name, symbols[12].name, symbols[17].name],
      [symbols[3].name, symbols[8].name, symbols[13].name, symbols[18].name],
      [symbols[4].name, symbols[9].name, symbols[14].name, symbols[19].name],
    ];
    this.res = spinsResult;

    for (let lineIdx = 0; lineIdx < this.lines.length; lineIdx++) {
      for (
        let coordIdx = 0;
        coordIdx < this.lines[lineIdx].length;
        coordIdx++
      ) {
        let coords = this.lines[lineIdx][coordIdx];

        let symbolAtCords = spinsResult[coords[0]][coords[1]];

        if (coordIdx === 0) {
          if (symbolAtCords === "8") {
            // console.log("bonus game!");
            // Not working yet
          }
          currentKind = symbolAtCords;

          streak = 1;
        } else {
          if (symbolAtCords !== currentKind) {
            console.log("--------" + lineIdx + "-------");

            console.log("No win!");
            setTimeout(() => {
              const loseAudio = document.getElementById("nowin") as any;
              loseAudio.play();
            }, this.spinTime);
            break;
          }
          streak += 1;
        }
      }

      if (streak >= 3) {
        this.winningLines.push(lineIdx);
        console.log("YOU WIN!");
        this.winnerLines.push(lineIdx);
        this.setLines(this.winnerLines);
        this.winnerLines = [];

        setTimeout(() => {
          const winAudio = document.getElementById("win") as any;
          winAudio.play();
        }, this.spinTime);
      }
      console.log(streak);
    }
    setTimeout(() => {
      console.log(this.winningLines);

      this.highlightLines(0, spinsResult);
      this.winningLines = [];
    }, this.spinTime);
  }

  setLines(lines) {
    const elementContainer = document.querySelector("#line-container");

    const elementContainerChild = elementContainer.childNodes[0] as HTMLElement;
    console.dir(elementContainerChild);
    elementContainerChild.innerHTML += "";
    setTimeout(() => {
      for (let i = 0; i < lines.length; i++) {
        elementContainerChild.innerHTML += `<img  class="line" src="../../assets/images/lines/line${lines[i]}.svg" alt="" />`;
      }
    }, this.spinTime);
  }
}
