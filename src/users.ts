import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // string
  { name: "Jim", age: 25 },
];

/**
 * Runtime validator + transformer
 */
function parseUsers(data: unknown): User[] {
  if (!Array.isArray(data)) return [];

  const result: User[] = [];

  for (const item of data) {
    if (
      typeof item === "object" &&
      item !== null &&
      "name" in item &&
      "age" in item
    ) {
      const name = (item as any).name;
      const age = (item as any).age;

      if (typeof name === "string") {
        const numericAge =
          typeof age === "number"
            ? age
            : typeof age === "string"
            ? Number(age)
            : NaN;

        if (!Number.isNaN(numericAge)) {
          result.push({ name, age: numericAge });
        }
      }
    }
  }

  return result;
}

export function getUsersData(): User[] {
  return parseUsers(apiResponse);
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}