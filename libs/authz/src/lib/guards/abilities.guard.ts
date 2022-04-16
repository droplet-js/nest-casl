import { ForbiddenError } from '@casl/ability';
import { CHECK_ABILITY } from '../decorators/abilities.decorator';
import { RequiredRule } from '../interfaces/requires-rule.interface';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { AbilityFactory } from '../ability.factory';
import { Reflector } from '@nestjs/core';
import { currentUser } from '@nest-casl/user';

@Injectable()
export class AbilitiesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: AbilityFactory
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const rules =
      this.reflector.get<RequiredRule[]>(CHECK_ABILITY, context.getHandler()) ||
      [];

    //   const { user } = context.switchToHttp().getRequest();
    const user = currentUser;
    const ability = this.caslAbilityFactory.defineAbility(user);

    try {
      rules.forEach((rule) =>
        ForbiddenError.from(ability).throwUnlessCan(rule.action, rule.subject)
      );
      return true;
    } catch (err) {
      if (err instanceof ForbiddenError) {
        throw new ForbiddenException(err.message);
      }
    }
  }
}
