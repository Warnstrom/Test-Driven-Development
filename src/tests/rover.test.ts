import { MarsRover } from "../index";
import { Planet } from "../index";

describe("Mars Rover Tests", () => {
  const planet: Planet = new Planet(5, 5);
  const rover: MarsRover = new MarsRover(1, 2);
  describe("Create mars rover", () => {
    it("should return starting position with the direction of the rover", () => {
      const position: RoverPosition = rover.getPosition();
      const direction: RoverDirection = rover.getDirection();
      expect(position.x).toBe(1);
      expect(position.y).toBe(2);
      expect(direction).toBe("N");
    });
  });
  describe("Move the rover forward", () => {
    it("should return x+1 with the direction of the rover", () => {
      rover.execute("move");
      const position: RoverPosition = rover.getPosition();
      const direction: RoverDirection = rover.getDirection();
      expect(position.x).toBe(2);
      expect(position.y).toBe(2);
      expect(direction).toBe("N");
    });
  });
  describe("Turn the rover to the right", () => {
    it("should return x+1 with the direction of the rover", () => {
      rover.execute("turnRight");
      const position: RoverPosition = rover.getPosition();
      const direction: RoverDirection = rover.getDirection();
      expect(position.x).toBe(2);
      expect(position.y).toBe(2);
      expect(direction).toBe("E");
    });
  });
  describe("Reverse rover one", () => {
    it("should return x-1 with the direction of the rover", () => {
      rover.execute("reverse");
      const position: RoverPosition = rover.getPosition();
      const direction: RoverDirection = rover.getDirection();
      expect(position.x).toBe(1);
      expect(position.y).toBe(2);
      expect(direction).toBe("E");
    });
  });
});
