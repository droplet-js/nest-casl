import { ForbiddenError } from '@casl/ability';
import { AbilityFactory, Action } from '@nest-casl/authz';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private abilityFactory: AbilityFactory) {}
  create(createUserDto: CreateUserDto, user: User) {
    const ability = this.abilityFactory.defineAbility(user);
    ForbiddenError.from(ability).throwUnlessCan(Action.Create, User);

    // Create call DB
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    const user = new User();
    user.id = id;
    user.orgId = 2;
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto, currentUser: User) {
    const found = this.findOne(+id);
    const ability = this.abilityFactory.defineAbility(currentUser);
    ForbiddenError.from(ability).throwUnlessCan(Action.Update, found);

    // update call DB
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
