// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from '@nest-casl/user';
import { SetMetadata } from '@nestjs/common';
import { Action } from '../enum/action.enum';
import { RequiredRule } from '../interfaces/requires-rule.interface';
import { Subjects } from '../types/subject.type';

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);

export class ReadUserAbility implements RequiredRule {
  action: Action = Action.Read;
  subject: Subjects = User;
}
