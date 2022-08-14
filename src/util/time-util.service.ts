import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeUtilService {
  /**
   * @return string - today's date in YYYY-MM-DD format
   */
  getToday(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  getNowTimestamp(): number {
    const date = new Date();
    return date.getTime();
  }

  getTommorowMidnightTimestamp(): number {
    const date = new Date();
    return date.setHours(24, 0, 0, 0);
  }

  getTimestampFromNowToTommorowMidnight(): number {
    return this.getTommorowMidnightTimestamp() - this.getNowTimestamp();
  }
}
