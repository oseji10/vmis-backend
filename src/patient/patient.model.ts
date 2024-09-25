import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Patient {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  gender: string;

  @Field()
  dob: Date;

  @Field()
  phone: string;

  @Field()
  email: string;
}
