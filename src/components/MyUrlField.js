import * as React from "react";
import { useRecordContext } from "react-admi";

function MyUrlField({ source }) {
    const record = useRecordContext();
    return record ? (
        <a href={record[source]}>{record[source]}</a>
    ) : null;
}

export default MyUrlField;

// react-admin provides many more Field components, mapping various data types.
// You can also write a custom Field component easily: 
// => This <MyUrlField> works same as React-admin's <UrlField>