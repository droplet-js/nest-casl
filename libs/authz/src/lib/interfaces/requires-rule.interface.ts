import { Action } from '../enum/action.enum';
import { Subjects } from '../types/subject.type';

export interface RequiredRule {
  action: Action;
  subject: Subjects;
}
