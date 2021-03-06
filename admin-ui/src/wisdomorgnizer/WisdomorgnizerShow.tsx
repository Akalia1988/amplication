import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { WISDOMORGNIZER_TITLE_FIELD } from "./WisdomorgnizerTitle";

export const WisdomorgnizerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address 1" source="address_1" />
        <TextField label="Address 2" source="address_2" />
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="State" source="state" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Zip" source="zip" />
        <ReferenceManyField
          reference="Customer"
          target="WisdomorgnizerId"
          label="Customers"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Address"
              source="wisdomorgnizer.id"
              reference="Wisdomorgnizer"
            >
              <TextField source={WISDOMORGNIZER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
