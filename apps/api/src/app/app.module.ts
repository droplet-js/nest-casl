import { AuthzModule } from '@nest-casl/authz';
import { UserModule } from '@nest-casl/user';
import { forwardRef, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
