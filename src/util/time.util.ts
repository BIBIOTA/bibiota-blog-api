/**
 * @return string - today's date in YYYY-MM-DD format
 */
export const getToday = (): string => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export const getNowTimestamp = (): number => {
  const date = new Date();
  return date.getTime();
};

export const getTommorowMidnightTimestamp = (): number => {
  const date = new Date();
  return date.setHours(24, 0, 0, 0);
};

export const getTimestampFromNowToTommorowMidnight = (): number => {
  return getTommorowMidnightTimestamp() - getNowTimestamp();
};
