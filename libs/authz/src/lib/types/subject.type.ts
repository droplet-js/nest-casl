import { InferSubjects } from '@casl/ability';
import { User } from '@nest-casl/user';

export type Subjects = InferSubjects<typeof User> | 'all';
