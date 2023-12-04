import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, {
    provide: 'common',
    useValue: {
      cc: 123,
      aa: 321
    }
  },
  {
    provide: 'common1',
    useFactory(...args) {
        return {

        }
    },
  }
],
})
export class UserModule {}
