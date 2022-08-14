import { Injectable } from '@nestjs/common';
import { ResponseMessageType, Output } from '../dto/output.dto';
import { RESPONSE_MESSAGE } from '../enum/response-message-enum';

@Injectable()
export class ResponseService {
  setResponse(
    responseData: any,
    status: boolean,
    message: ResponseMessageType = RESPONSE_MESSAGE.OK,
  ): Output {
    return {
      status,
      message,
      data: responseData,
    };
  }
}
