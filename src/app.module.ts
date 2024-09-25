import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PatientModule } from './patient/patient.module'; // import your module



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  // or your database host
      port: 5432,         // default PostgreSQL port
      username: 'postgres',
      password: '2wsxzaQ1!',
      database: 'vmis',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // set to 'false' in production
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PatientModule, // add your module
  ],
})
export class AppModule {}
