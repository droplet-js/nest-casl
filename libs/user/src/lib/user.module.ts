import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthzModule } from '@nest-casl/authz';

@Module({
  imports: [AuthzModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
