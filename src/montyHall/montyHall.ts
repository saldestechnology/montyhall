export class MontyHall {
  private _numSimulations: number;
  private _numBoxes: number;
  private _switchWins: number;
  private _stayWins: number;

  constructor(numSimulations: number, numBoxes: number = 3) {
    this._numSimulations = numSimulations;
    this._numBoxes = numBoxes;
    this._switchWins = 0;
    this._stayWins = 0;
  }

  // Getters
  get switchWins(): number {
    return this._switchWins;
  }

  get stayWins(): number {
    return this._stayWins;
  }

  // Returns a random number from 0 to numBoxes - 1, excluding the given numbers.
  private randomBox(exclude: number[] = []): number {
    let box: number;
    do {
      box = Math.floor(Math.random() * this._numBoxes);
    } while (exclude.includes(box));
    return box;
  }

  // Simulates the Monty Hall problem.
  public simulate(): void {
    for (let i = 0; i < this._numSimulations; i++) {
      const prizeBox: number = this.randomBox();
      const chosenBox: number = this.randomBox();

      // The host opens a non-chosen, non-prize box.
      const openedBox: number = this.randomBox([chosenBox, prizeBox]);

      // If the player switches, they select the remaining box.
      const switchedBox: number = this.randomBox([chosenBox, openedBox]);

      this._stayWins += chosenBox === prizeBox ? 1 : 0;
      this._switchWins += switchedBox === prizeBox ? 1 : 0;
    }
  }

  // Prints the results of the simulation.
  public printResults(): void {
    console.log(`Results after ${this._numSimulations} simulations:`);
    console.log(`Wins when staying: ${this._stayWins}`);
    console.log(`Wins when switching: ${this._switchWins}`);
    console.log(
      `Winning percentage when staying: ${
        (this._stayWins / this._numSimulations) * 100
      }%`,
    );
    console.log(
      `Winning percentage when switching: ${
        (this._switchWins / this._numSimulations) * 100
      }%`,
    );
  }
}
