import { RESPONSE_MESSAGE } from '../enum/response-message-enum';

export type ResponseMessageType = RESPONSE_MESSAGE;

export interface Output {
  status: boolean;
  message: ResponseMessageType;
  data: any;
}
