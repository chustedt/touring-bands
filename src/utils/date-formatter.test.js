import { formatDate } from "./date-formatter";

describe("formatDate function", () => {
  it("should return a correctly formatted date string", () => {
    const milliseconds = 1677855600000; // Friday, March 3, 2023
    const formattedDate = formatDate(milliseconds);

    expect(formattedDate).toBe("Friday, March 3");
  });

  it("should handle non-number inputs gracefully", () => {
    const result = formatDate("some string");
    expect(result).toBe("Invalid Date");
  });
});
