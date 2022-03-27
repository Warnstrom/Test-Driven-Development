export class Coordinates {
    constructor(readonly x: number, readonly y: number) {}
  }
  export class MarsRover {
    private planet: [number, number] = [5, 5];
    private currentOrientation: string;
    private possibleOrientations: string[] = ["N", "E", "S", "W"];
    private moveInstructions: { [command: string]: () => Boolean } = {
      F: () => this.forward(),
      B: () => this.back(),
      R: () => this.right(),
      L: () => this.left(),
    };
    private position: { [key: string]: number } = {
      x: 0,
      y: 0,
    };
  
    constructor(x: number, y: number, orientation: string) {
      this.position["x"] = x;
      this.position["y"] = y;
      this.currentOrientation = orientation;
    }
  
    getOrientation(): string {
      return this.currentOrientation;
    }
    getPosition() {
      return this.position;
    }
    move(instructions: string): void {
      for (const command of [...instructions]) {
        if (!this.moveInstructions[command]()) {
          throw new Error("Something went wrong");
        }
      }
    }
    private forward(): boolean {
      if (this.currentOrientation === "N") {
        if (this.position["y"] === 4) {
          this.position["y"] = 0;
        } else {
          this.position["y"]++;
        }
      } else if (this.currentOrientation === "E") {
        if (this.position["x"] === 4) {
          this.position["x"] = 0;
        } else {
          this.position["x"]++;
        }
      } else if (this.currentOrientation === "S") {
        if (this.position["y"] === 0) {
          this.position["y"] = 4;
        } else {
          this.position["y"]--;
        }
      } else if (this.currentOrientation === "W") {
        if (this.position["x"] === 0) {
          this.position["x"] = 4;
        } else {
          this.position["x"]--;
        }
      }
      return true;
    }
    private back(): boolean {
      this.position["y"] =
        this.currentOrientation === "N" && this.position["y"] === 0 ? 4 : this.position["y"]--;
      this.position["y"] =
        this.currentOrientation === "S" && this.position["y"] === 4 ? 0 : this.position["y"]++;
      this.position["x"] =
        this.currentOrientation === "E" && this.position["x"] === 0 ? 4 : this.position["x"]--;
      this.position["x"] =
        this.currentOrientation === "W" && this.position["x"] === 4 ? 0 : this.position["x"]++;
      return true;
    }
    /**
     *
     * Ugly if/if else statement, not proud at all
     */
    private right(): boolean {
      if (this.currentOrientation === "N") {
        this.currentOrientation = "E";
      } else if (this.currentOrientation === "E") {
        this.currentOrientation = "S";
      } else if (this.currentOrientation === "S") {
        this.currentOrientation = "W";
      } else if (this.currentOrientation === "W") {
        this.currentOrientation = "N";
      }
      return true;
    }
    /**
     *
     * Ugly if/if else statement, not proud at all
     */
    private left(): boolean {
      if (this.currentOrientation === "N") {
        this.currentOrientation = "W";
      } else if (this.currentOrientation === "W") {
        this.currentOrientation = "S";
      } else if (this.currentOrientation === "S") {
        this.currentOrientation = "E";
      } else if (this.currentOrientation === "E") {
        this.currentOrientation = "N";
      }
      return true;
    }
  }