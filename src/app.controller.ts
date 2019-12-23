import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
@UseInterceptors(TimeoutInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<string> {
    console.log('In controller');
    return this.appService.getHello();
  }
}
