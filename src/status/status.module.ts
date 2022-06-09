import { Module } from "@nestjs/common";
import { StatusService } from "./status.service";
import { StatusController } from "./status.controller";
import { DatabaseModule } from "../database/database.module";
import { statusesProviders } from "./entities/status.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [StatusController],
  providers: [StatusService, ...statusesProviders]
})
export class StatusModule {
}
