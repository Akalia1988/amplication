import { CustomerCreateNestedManyWithoutWisdomorgnizersInput } from "./CustomerCreateNestedManyWithoutWisdomorgnizersInput";

export type WisdomorgnizerCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutWisdomorgnizersInput;
  state?: string | null;
  zip?: number | null;
};
