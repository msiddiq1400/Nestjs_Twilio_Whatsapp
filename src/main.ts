import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger docs added for api
  const config = new DocumentBuilder()
    .setTitle('Call Example')
    .setDescription('Calls with twilio')
    .setVersion('1.0')
    .addTag('calls')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //start the app
  await app.listen(3000);
}
bootstrap();
