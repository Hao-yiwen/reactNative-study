import {NativeModules} from 'react-native';

const {CalendarModule} = NativeModules;

type CalendarModuleTypes = {
  createCalendarEvent(
    name: string,
    location: string,
    callback: (error: any, eventId: string) => void,
  ): void;
  createCalendarEventOther(
    name: string,
    location: string,
    successCallback: (eventId: string) => void,
    errorCallback: (error: any) => void,
  ): void;
  createCalendarEventPromise(name: string, location: string): Promise<string>;
  getConstants(): {EVENT_NAME: string};
};

export default CalendarModule as CalendarModuleTypes;
