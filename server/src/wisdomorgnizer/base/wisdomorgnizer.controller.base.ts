/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { WisdomorgnizerService } from "../wisdomorgnizer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { WisdomorgnizerCreateInput } from "./WisdomorgnizerCreateInput";
import { WisdomorgnizerWhereInput } from "./WisdomorgnizerWhereInput";
import { WisdomorgnizerWhereUniqueInput } from "./WisdomorgnizerWhereUniqueInput";
import { WisdomorgnizerFindManyArgs } from "./WisdomorgnizerFindManyArgs";
import { WisdomorgnizerUpdateInput } from "./WisdomorgnizerUpdateInput";
import { Wisdomorgnizer } from "./Wisdomorgnizer";
import { CustomerFindManyArgs } from "../../customer/base/CustomerFindManyArgs";
import { Customer } from "../../customer/base/Customer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class WisdomorgnizerControllerBase {
  constructor(
    protected readonly service: WisdomorgnizerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Wisdomorgnizer",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Wisdomorgnizer })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: WisdomorgnizerCreateInput
  ): Promise<Wisdomorgnizer> {
    return await this.service.create({
      data: data,
      select: {
        address_1: true,
        address_2: true,
        city: true,
        createdAt: true,
        id: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Wisdomorgnizer",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Wisdomorgnizer] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(WisdomorgnizerFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Wisdomorgnizer[]> {
    const args = plainToClass(WisdomorgnizerFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        address_1: true,
        address_2: true,
        city: true,
        createdAt: true,
        id: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Wisdomorgnizer",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Wisdomorgnizer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: WisdomorgnizerWhereUniqueInput
  ): Promise<Wisdomorgnizer | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        address_1: true,
        address_2: true,
        city: true,
        createdAt: true,
        id: true,
        state: true,
        updatedAt: true,
        zip: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Wisdomorgnizer",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Wisdomorgnizer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: WisdomorgnizerWhereUniqueInput,
    @common.Body() data: WisdomorgnizerUpdateInput
  ): Promise<Wisdomorgnizer | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          address_1: true,
          address_2: true,
          city: true,
          createdAt: true,
          id: true,
          state: true,
          updatedAt: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Wisdomorgnizer",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Wisdomorgnizer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: WisdomorgnizerWhereUniqueInput
  ): Promise<Wisdomorgnizer | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          address_1: true,
          address_2: true,
          city: true,
          createdAt: true,
          id: true,
          state: true,
          updatedAt: true,
          zip: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/customers")
  @ApiNestedQuery(CustomerFindManyArgs)
  async findManyCustomers(
    @common.Req() request: Request,
    @common.Param() params: WisdomorgnizerWhereUniqueInput
  ): Promise<Customer[]> {
    const query = plainToClass(CustomerFindManyArgs, request.query);
    const results = await this.service.findCustomers(params.id, {
      ...query,
      select: {
        address: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Wisdomorgnizer",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/customers")
  async connectCustomers(
    @common.Param() params: WisdomorgnizerWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Wisdomorgnizer",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/customers")
  async updateCustomers(
    @common.Param() params: WisdomorgnizerWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Wisdomorgnizer",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/customers")
  async disconnectCustomers(
    @common.Param() params: WisdomorgnizerWhereUniqueInput,
    @common.Body() body: CustomerWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customers: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
