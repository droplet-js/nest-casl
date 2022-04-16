import { SetMetadata } from '@nestjs/common';
import { RequiredRule } from '../interfaces/requires-rule.interface';

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);
