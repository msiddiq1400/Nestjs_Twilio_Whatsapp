import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Req,
  UseInterceptors,
} from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
@UseInterceptors(ClassSerializerInterceptor)
export default class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('initiate-verification')
  async initiatePhoneNumberVerification(@Body() body: any) {
    const { phoneNumber } = body;
    await this.smsService.initiatePhoneNumberVerification(phoneNumber);
  }
}
