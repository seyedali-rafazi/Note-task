export default function limitDay(date: any) {
  const currentDate = new Date();
  const noteDate = new Date(date);

  // Calculate the difference in time (milliseconds)
  const timeDiff = noteDate.getTime() - currentDate.getTime();

  // Convert time difference from milliseconds to days
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff < 0) {
    return {
      daysRemain: daysDiff,
      remainNote: "EXPIRED",
    };
  }
  if ((daysDiff <= 7 && daysDiff >= 0) || daysDiff == 0) {
    return {
      daysRemain: daysDiff,
      remainNote: "DANGER",
    };
  } else if (daysDiff > 7) {
    return {
      daysRemain: daysDiff,
      remainNote: "Safe",
    };
  } else {
    return {
      daysRemain: 0,
      remainNote: "Safe",
    };
  }
}
