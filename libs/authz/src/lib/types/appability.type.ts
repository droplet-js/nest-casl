import { Ability } from '@casl/ability';
import { Action } from '../enum/action.enum';
import { Subjects } from './subject.type';

export type AppAbility = Ability<[Action, Subjects]>;
