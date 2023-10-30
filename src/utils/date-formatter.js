export function formatDate(milliseconds) {
  const date = new Date(milliseconds);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);

  const dateParts = formattedDate.split(", ");
  const dayOfWeek = dateParts[0];
  const monthAndDay = dateParts[1];
  return `${dayOfWeek}, ${monthAndDay} `;
}
