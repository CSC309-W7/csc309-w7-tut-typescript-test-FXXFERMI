import { describe, it, expect } from "vitest";
import { getUsersData, formatAges } from "../src/users";

describe("TypeScript vs runtime data", () => {
  it("getUsersData should return valid users (age must be number)", () => {
    const users = getUsersData();
    for (const u of users) {
      expect(typeof u.name).toBe("string");
      expect(typeof u.age).toBe("number");
    }
  });

  it("formatAges should not throw", () => {
    const users = getUsersData();
    expect(() => formatAges(users)).not.toThrow();
  });

  it("Kevin's age should equal 24", () => {
    const users = getUsersData();
    const kevin = users.find(u => u.name === "Kevin");
    expect(kevin).toBeTruthy();
    expect(kevin!.age).toBe(24);
  });
});