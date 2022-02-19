import * as React from "react";
import { useRecordContext } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

/* In JSS, you define styles as a JavaScript object, using the JS variants of the CSS property names (e.g. textDecoration instead of text-decoration). 
   To pass these styles to the component, use `makeStyles` to build a React hook. 
   The hook will create new class names for these styles, and return the new class names in the `classes` object. 
   Then, use these names in a className prop, as you would with a regular CSS class (e.g. classes.link, classes.icon). */

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        height: '0.5em',
        paddingLeft: 2,
    },
});

function MyUrlField({ source }) {
    const record = useRecordContext();
    const classes = useStyles();
    return record ? (
        <a href={record[source]} className={classes.link}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a>
    ) : null;
}

export default MyUrlField;

// react-admin provides many more Field components, mapping various data types.
// You can also write a custom Field component easily: 
// => This <MyUrlField> works same as React-admin's <UrlField>