import { CustomerUpdateManyWithoutWisdomorgnizersInput } from "./CustomerUpdateManyWithoutWisdomorgnizersInput";

export type WisdomorgnizerUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutWisdomorgnizersInput;
  state?: string | null;
  zip?: number | null;
};
