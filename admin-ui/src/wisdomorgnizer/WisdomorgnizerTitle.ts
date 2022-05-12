import { Wisdomorgnizer as TWisdomorgnizer } from "../api/wisdomorgnizer/Wisdomorgnizer";

export const WISDOMORGNIZER_TITLE_FIELD = "address_1";

export const WisdomorgnizerTitle = (record: TWisdomorgnizer): string => {
  return record.address_1 || record.id;
};
