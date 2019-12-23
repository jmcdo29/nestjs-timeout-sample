import { Injectable } from '@nestjs/common';

function asyncTimeout(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
}

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    console.log('In service');
    await asyncTimeout(5000);
    console.log('Returning after waiting');
    return 'Hello World!';
  }
}
