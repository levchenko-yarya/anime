import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { DatabaseModule } from "../database/database.module";
import { usersProviders } from "./entities/users.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...usersProviders]
})
export class UserModule {
}