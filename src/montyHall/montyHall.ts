export class MontyHall {
  private numSimulations: number;
  private numBoxes: number;
  private switchWins: number;
  private stayWins: number;

  constructor(numSimulations: number, numBoxes: number = 3) {
    this.numSimulations = numSimulations;
    this.numBoxes = numBoxes;
    this.switchWins = 0;
    this.stayWins = 0;
  }

  // Getters
  get getSwitchWins(): number {
    return this.switchWins;
  }

  get getStayWins(): number {
    return this.stayWins;
  }

  // Returns a random number from 0 to numBoxes - 1, excluding the given numbers.
  private randomBox(exclude: number[] = []): number {
    let box: number;
    do {
      box = Math.floor(Math.random() * this.numBoxes);
    } while (exclude.includes(box));
    return box;
  }

  // Simulates the Monty Hall problem.
  public simulate(): void {
    for (let i = 0; i < this.numSimulations; i++) {
      const prizeBox: number = this.randomBox();
      const chosenBox: number = this.randomBox();

      // The host opens a non-chosen, non-prize box.
      const openedBox: number = this.randomBox([chosenBox, prizeBox]);

      // If the player switches, they select the remaining box.
      const switchedBox: number = this.randomBox([chosenBox, openedBox]);

      this.stayWins += chosenBox === prizeBox ? 1 : 0;
      this.switchWins += switchedBox === prizeBox ? 1 : 0;
    }
  }

  // Prints the results of the simulation.
  public printResults(): void {
    console.log(`Results after ${this.numSimulations} simulations:`);
    console.log(`Wins when staying: ${this.stayWins}`);
    console.log(`Wins when switching: ${this.switchWins}`);
    console.log(
      `Winning percentage when staying: ${
        (this.stayWins / this.numSimulations) * 100
      }%`
    );
    console.log(
      `Winning percentage when switching: ${
        (this.switchWins / this.numSimulations) * 100
      }%`
    );
  }
}
