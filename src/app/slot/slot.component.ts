import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slot",
  templateUrl: "./slot.component.html",
  styleUrls: ["./slot.component.scss"],
})
export class SlotComponent implements OnInit {
  symbols: any = [
    {
      value: 2,
      name: "w",
      symbol: "../../assets/images/symbols/Asset1.svg",
    },
    {
      value: 3,
      name: "c",
      symbol: "../../assets/images/symbols/Asset11.svg",
    },
    {
      value: 4,
      name: "c",
      symbol: "../../assets/images/symbols/Asset3.svg",
    },
    {
      value: 5,
      name: "b",
      symbol: "../../assets/images/symbols/Asset4.svg",
    },
    {
      value: 6,
      name: "7",
      symbol: "../../assets/images/symbols/Asset5.svg",
    },
    {
      value: 7,
      name: "h",
      symbol: "../../assets/images/symbols/Asset6.svg",
    },
    {
      value: 8,
      name: "c",
      symbol: "../../assets/images/symbols/Asset7.svg",
    },
    {
      value: 9,
      name: "d",
      symbol: "../../assets/images/symbols/Asset8.svg",
    },
    {
      value: 10,
      name: "s",
      symbol: "../../assets/images/symbols/Asset9.svg",
    },
    {
      value: 11,
      name: "sb",
      symbol: "../../assets/images/symbols/Asset10.svg",
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
    for (let i = 0; i < 180; i++) {
      let r = Math.random() * 2;
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
      elements[i].style.filter = "grayscale(0)";
    }
    this.lines[this.winningLines[currentIndex]].map((el: any) => {
      const elements = document.getElementsByClassName("symbols") as any;
      elements[el[0]].style.filter = "grayscale(100%)";
    });
  };
  checkWin(symbols) {
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
          currentKind = symbolAtCords;

          streak = 1;
        } else {
          if (symbolAtCords !== currentKind) {
            break;
          }
          streak++;
        }
      }

      if (streak >= 3) {
        // console.log("Wining LINES: " + lineIdx);
        this.winningLines.push(lineIdx);
        console.log("YOU WIN!");
      }
    }
    setTimeout(() => {
      console.log(this.winningLines);

      this.highlightLines(0, spinsResult);
      this.winningLines = [];
    }, 3000);

    // console.log(streak);
    // Not working yet. So you can't win :D
  }
}
