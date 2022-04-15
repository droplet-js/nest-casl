import { Module } from '@nestjs/common';
import { AbilityFactory } from './ability.factory';

@Module({
  controllers: [],
  providers: [AbilityFactory],
  exports: [AbilityFactory],
})
export class AuthzModule {}
