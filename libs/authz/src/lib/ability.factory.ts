import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
} from '@casl/ability';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { User } from '@nest-casl/user';
import { Injectable } from '@nestjs/common';
import { Action } from './enum/action.enum';
import { AppAbility } from './types/appability.type';
import { Subjects } from './types/subject.type';

@Injectable()
export class AbilityFactory {
  defineAbility(user: User) {
    //   define rules
    const { can, cannot, build } = new AbilityBuilder(
      Ability as AbilityClass<AppAbility>
    );

    if (user.isAdmin) {
      can(Action.Manage, 'all');
      cannot(Action.Manage, User, { orgId: { $ne: user.orgId } }).because(
        'You can only manage users in your own organization'
      );
    } else {
      can(Action.Read, 'all');
      cannot(Action.Create, User).because(
        `You are not allowed to create a user`
      );
      cannot(Action.Delete, User).because(
        "You're not authorized to delete a user"
      );
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
