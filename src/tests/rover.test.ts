import { MarsRover } from "../index";

describe("Create mars rover", () => {
  it("should return starting position with the direction of the rover", () => {
    const rover: MarsRover = new MarsRover(0, 0, "N");
    expect(rover).toBeDefined();
    rover.move("FFLFRF");
    const position = rover.getPosition();
    const direction: string = rover.getOrientation();
    expect(position.x).toBe(4);
    expect(position.y).toBe(3);
    expect(direction).toBe("N");
  });
});
describe("Move the rover forward", () => {
  it("should return x+1 with the direction of the rover", () => {
    const rover: MarsRover = new MarsRover(0, 0, "N");
    expect(rover).toBeDefined();
    rover.move("RFFLFF");
    const position = rover.getPosition();
    const direction: string = rover.getOrientation();
    expect(position.x).toBe(2);
    expect(position.y).toBe(2);
    expect(direction).toBe("N");
  });
});
describe("Turn the rover to the right", () => {
  it("should return x+1 with the direction of the rover", () => {
    const rover: MarsRover = new MarsRover(0, 0, "N");
    expect(rover).toBeDefined();
    rover.move("LF");
    const position = rover.getPosition();
    const direction: string = rover.getOrientation();
    expect(position.x).toBe(4);
    expect(position.y).toBe(0);
    expect(direction).toBe("W");
  });
});
describe("Reverse rover one", () => {
  it("should return x-1 with the direction of the rover", () => {
    const rover: MarsRover = new MarsRover(0, 0, "N");
    expect(rover).toBeDefined();
    rover.move("RFFFLFRFF");
    const position = rover.getPosition();
    const direction: string = rover.getOrientation();
    expect(position.x).toBe(0);
    expect(position.y).toBe(1);
    expect(direction).toBe("E");
  });
});
