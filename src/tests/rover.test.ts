import { MarsRover } from "../index";

describe("Create mars rover", () => {
  it("should return position(4,3) and direction N for move(FFLFRF)", () => {
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
  it("should return position(2,2) and direction N for move(RFFLFF)", () => {
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
  it("should return position(4,0) and direction W for move(LF)", () => {
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
  it("should return position(1,3) and direction N for move(FFRFFFFFFLF)", () => {
    const rover: MarsRover = new MarsRover(0, 0, "N");
    expect(rover).toBeDefined();
    rover.move("FFRFFFFFFLF");
    const position = rover.getPosition();
    const direction: string = rover.getOrientation();
    expect(position.x).toBe(1);
    expect(position.y).toBe(3);
    expect(direction).toBe("N");
  });
  
});
describe("Reverse rover one", () => {
  it("should return position(3,4) and direction S for move(FFFFRFFFR) and position(4,2) and direction E for move(FFLF)", () => {
    const rover: MarsRover = new MarsRover(0, 0, "N");
    expect(rover).toBeDefined();
    rover.move("FFFFRFFFR");
    const position = rover.getPosition();
    const direction: string = rover.getOrientation();
    expect(position.x).toBe(3);
    expect(position.y).toBe(4);
    expect(direction).toBe("S");
    rover.move("FFLF");
    const position_1 = rover.getPosition();
    const direction_1: string = rover.getOrientation();
    expect(position_1.x).toBe(4);
    expect(position_1.y).toBe(2);
    expect(direction_1).toBe("E");
  });
  
});
describe("Reverse rover one", () => {
  it("should position(2,0) and direction W for move(LFFF) and position(3,2) and direction E for move(RFFRF)", () => {
    const rover: MarsRover = new MarsRover(0, 0, "N");
    expect(rover).toBeDefined();
    rover.move("LFFF");
    const position = rover.getPosition();
    const direction: string = rover.getOrientation();
    expect(position.x).toBe(2);
    expect(position.y).toBe(0);
    expect(direction).toBe("W");
    rover.move("RFFRF");
    const position_1 = rover.getPosition();
    const direction_1: string = rover.getOrientation();
    expect(position_1.x).toBe(3);
    expect(position_1.y).toBe(2);
    expect(direction_1).toBe("E");
  });
  
});
