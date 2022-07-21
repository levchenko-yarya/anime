import { UserService } from './../user/user.service';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { usersProviders } from 'src/user/entities/users.providers';

@Module({
  imports: [UserModule],
  providers: [AuthService, JwtStrategy, UserService, ...usersProviders],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
