import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { WisdomorgnizerResolverBase } from "./base/wisdomorgnizer.resolver.base";
import { Wisdomorgnizer } from "./base/Wisdomorgnizer";
import { WisdomorgnizerService } from "./wisdomorgnizer.service";

@graphql.Resolver(() => Wisdomorgnizer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class WisdomorgnizerResolver extends WisdomorgnizerResolverBase {
  constructor(
    protected readonly service: WisdomorgnizerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
