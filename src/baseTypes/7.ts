/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
enum WeekEnds {
  Saturday,
  Sunday,
}

function isWeekend(day: WeekDays | WeekEnds): boolean {
    return day === WeekEnds.Saturday || day === WeekEnds.Sunday;
}