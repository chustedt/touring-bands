import { formatDate } from "./date-formatter";

describe("formatDate", () => {
  test("correctly formatted date string", () => {
    const milliseconds = 1677855600000; // Friday, March 3, 2023
    const formattedDate = formatDate(milliseconds);

    expect(formattedDate).toBe("Friday, March 3");
  });

  test("non-number inputs gracefully handled", () => {
    const result = formatDate("some string");
    expect(result).toBe("Invalid Date");
  });
});
