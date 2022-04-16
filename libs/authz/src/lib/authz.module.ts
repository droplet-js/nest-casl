import { Module } from '@nestjs/common';
import { AbilityFactory } from './ability.factory';
import { AbilitiesGuard } from './guards/abilities.guard';

@Module({
  controllers: [],
  providers: [AbilityFactory, AbilitiesGuard],
  exports: [AbilityFactory, AbilitiesGuard],
})
export class AuthzModule {}
