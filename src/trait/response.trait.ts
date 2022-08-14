import { RESPONSE_MESSAGE } from '../enum/response-message-enum';
import { Output } from '../dto/output.dto';

export class Response {
  public static success(data: any, message = RESPONSE_MESSAGE.OK): Output {
    return {
      status: true,
      message: message,
      data: data,
    };
  }

  public static error(message = RESPONSE_MESSAGE.ERROR): Output {
    return {
      status: false,
      message: message,
      data: null,
    };
  }

  public static notFound(message = RESPONSE_MESSAGE.NOT_FOUND): Output {
    return {
      status: false,
      message: message,
      data: null,
    };
  }
}
