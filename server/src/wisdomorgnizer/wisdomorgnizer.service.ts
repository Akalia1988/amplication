import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { WisdomorgnizerServiceBase } from "./base/wisdomorgnizer.service.base";

@Injectable()
export class WisdomorgnizerService extends WisdomorgnizerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
