import {NativeModules} from 'react-native';
const {CalendarModuleFoo} = NativeModules;
interface CalendarInterface {
  DEFAULT_EVENT_NAME: string;
  SOME_OTHER_CONSTANT: string;
  createCalendarEvent: (name: string, location: string) => Promise<number>;
}
export default CalendarModuleFoo as CalendarInterface;
