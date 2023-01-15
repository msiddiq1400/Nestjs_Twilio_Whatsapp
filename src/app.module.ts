import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SmsService } from './sms/sms.service';
import * as Joi from '@hapi/joi';
import SmsController from './sms/sms.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        TWILIO_ACCOUNT_SID: Joi.string().required(),
        TWILIO_AUTH_TOKEN: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController, SmsController],
  providers: [AppService, SmsService],
})
export class AppModule {}
