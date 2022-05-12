import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WisdomorgnizerService } from "./wisdomorgnizer.service";
import { WisdomorgnizerControllerBase } from "./base/wisdomorgnizer.controller.base";

@swagger.ApiTags("wisdomorgnizers")
@common.Controller("wisdomorgnizers")
export class WisdomorgnizerController extends WisdomorgnizerControllerBase {
  constructor(
    protected readonly service: WisdomorgnizerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
