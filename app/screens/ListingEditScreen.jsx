import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import * as Yup from 'yup'

import Screen from '../../Components/Screen'
import AppForm from '../../Components/AppForm'
import AppFormField from '../../Components/AppFormField'
import AppFormPicker from '../../Components/AppFormPicker'
import SubmitButton from '../../Components/SubmitButton'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")

})

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
];

export default function ListingEditScreen() {
    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: ''
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}

            >

                <AppFormField
                    name="title"
                    placeholder="Title"
                    maxLength={255}
                />
                <AppFormField
                    name="price"
                    placeholder="Price"
                    keyboardType="numeric"
                    maxLength={8}

                />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                />
                <AppFormField
                    name="description"
                    maxLength={255}
                    multiline
                    numberOfLines={3}
                    placeholder="Description"

                />

                <SubmitButton title="Post" />


            </AppForm>

        </Screen>
    )
}

const styles = StyleSheet.create({

    container: {
        padding: 10
    }

})