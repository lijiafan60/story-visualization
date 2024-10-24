// src/mock/types.ts
export interface NDate{
  year: string,
  month: string,
  day: string
}

export function formatNDate(date: NDate, separator: string = '-'): string | null {
  const { year, month, day } = date;

  // 检查是否至少有一个非空值
  if (!year && !month && !day) {
    return null;
  }

  // 处理并填充每个部分
  const parts: string[] = [];

  if (year) {
    // 确保年份是 4 位数
    parts.push(year.padStart(4, '0'));
  }

  if (month) {
    // 确保月份是 2 位数
    const monthNum = parseInt(month, 10);
    if (!isNaN(monthNum) && monthNum >= 1 && monthNum <= 12) {
      parts.push(monthNum.toString().padStart(2, '0'));
    }
  }

  if (day) {
    // 确保日期是 2 位数
    const dayNum = parseInt(day, 10);
    if (!isNaN(dayNum) && dayNum >= 1 && dayNum <= 31) {
      parts.push(dayNum.toString().padStart(2, '0'));
    }
  }

  // 如果没有有效部分，返回 null
  if (parts.length === 0) {
    return null;
  }

  // 组合各部分
  return parts.join(separator);
}

// 比较两个 NDate 对象
export function compareNDates(a: NDate, b: NDate): number {
  // 比较年份
  const yearDiff = parseInt(a.year) - parseInt(b.year);
  if (yearDiff !== 0) return yearDiff;

  // 如果年份相同，比较月份
  const monthDiff = parseInt(a.month) - parseInt(b.month);
  if (monthDiff !== 0) return monthDiff;

  // 如果月份也相同，比较日期
  return parseInt(a.day) - parseInt(b.day);
}

// 新增的日期转换函数
export const dateToTimestamp = (date: Date): number | null => {
  if (date.year && date.month && date.day) {
    return new Date(`${date.year}-${date.month}-${date.day}`).getTime();
  }
  return null;
};

export const timestampToDate = (timestamp: number): Date => {
  const date = new Date(timestamp);
  return {
    year: date.getFullYear().toString(),
    month: (date.getMonth() + 1).toString().padStart(2, '0'),
    day: date.getDate().toString().padStart(2, '0')
  };
};

export enum EntityTypesEnum {
  Person = "PERSON",
  Location = "LOCATION",
  Organization = "ORGANIZATION",
  Event = "EVENT",
  Date = "DATE",
  Time = "TIME",
  Document = "DOCUMENT",
  Concept = "CONCEPT",
  Object = "OBJECT",
  Work = "WORK",
  Other = "OTHER"
}

export const entityTypes: EntityTypesEnum[] = Object.values(EntityTypesEnum);

export enum EventTypesEnum {
  Battle = "BATTLE",
  Rebellion = "REBELLION",
  Meeting = "MEETING",
  Strike = "STRIKE",
  Campaign = "CAMPAIGN",
  Establish = "ESTABLISH",
  BaseConstruct = "BASE_CONSTRUCT",
  Issue = "ISSUE",
  TreatySign = "TREATY_SIGN",
  Invade = "INVADE",
  Appointment = "APPOINTMENT",
  Movement = "MOVEMENT",
  Background = "BACKGROUND",
  Command = "COMMAND",
  Others = "OTHERS"
}

export const eventTypes: EventTypesEnum[] = Object.values(EventTypesEnum);

export interface Entity {
  id: string;
  name: string;
  desc: string;
  relation: string;
  type: EntityTypesEnum;
}

export interface Location {  
    name: string;  
    lat: number;
    lng: number;
}

export interface Media {
    url: string,       // url for featured media
    caption: string,   // optional; brief explanation of media content
    credit: string     // optional; creator of media content
}

export interface Event {  
    id: string;  
    title: string;
    type: string;
    startDate: NDate;
    endDate: NDate;
    location: Location;
    media: Media;
    description: string;
    relatedEntities: string[];
}

export interface Narrative {
    id: string;  
    title: string;  
    description: string;
    imageUrl: string;
    events: Event[];  
    entities: Entity[];  
}