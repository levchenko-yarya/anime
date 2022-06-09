import { Module } from '@nestjs/common';
import { ViewService } from './view.service';
import { ViewController } from './view.controller';
import { DatabaseModule } from "../database/database.module";
import { viewsProviders } from "./entities/view.providers";

@Module({
  imports: [DatabaseModule],
  controllers: [ViewController],
  providers: [ViewService, ...viewsProviders]
})
export class ViewModule {}
