import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';

import AppPicker from './AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker(props) {
    const { items, name, placeholder } = props;
    
    const { errors, touched, values, setFieldValue } = useFormikContext();
    return (
        <React.Fragment>

            <AppPicker
                items={items}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})