import { Module } from "@nestjs/common";
import { WisdomorgnizerModuleBase } from "./base/wisdomorgnizer.module.base";
import { WisdomorgnizerService } from "./wisdomorgnizer.service";
import { WisdomorgnizerController } from "./wisdomorgnizer.controller";
import { WisdomorgnizerResolver } from "./wisdomorgnizer.resolver";

@Module({
  imports: [WisdomorgnizerModuleBase],
  controllers: [WisdomorgnizerController],
  providers: [WisdomorgnizerService, WisdomorgnizerResolver],
  exports: [WisdomorgnizerService],
})
export class WisdomorgnizerModule {}
