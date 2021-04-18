import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import * as yup from 'yup';
import './form.styles.css';

const newForm = ({ submitUser }) => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [isDisabled, setIsDisabled] = useState(true)

    const formSchema = yup.object().shape({
        name: yup.string().required('Name is required!'),
        email: yup.string().required('Must be a valid email address'),
        password: yup
            .string()
            .required('Password is required!')
            .min(6, 'Password must me at least 6 chars long'),
        terms: yup
            .boolean()
            .oneOf([true], 'You must agree to the terms of service'),
    })

    const validateChange = (event) => {
        yup.reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then((valid) => {
                setErrors({ ...errors, [event.target.name]: '' })
            })
            .catch((err) => {
                console.log('ERROR!', err)
                setErrors({ ...errors, [event.target.name]: err.errors[0] })
            })
    }

    useEffect(() => {
        formSchema.isValid(formState).then((valid) => {
            console.log('valid?', valid)
            setIsDisabled(!valid)
        })
    }, [formState])

    const handleChange = (event) => {
        event.persist()
        validateChange(event)
        if (event.target.name === 'terms') {
            setFormState({ ...formState, terms: event.target.checked })
        } else {
            setFormState({ ...formState, [event.target.name]: event.target.value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        submitUser(formState)
        setFormState({
            name: '',
            email: '',
            password: '',
            terms: '',
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1 style={{ marginBottom: '5%' }}>New User</h1>
            <FormGroup>
                <Label htmlFor='name'>Name</Label>
                <Input
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Name'
                    value={formState.name}
                    onChange={handleChange}
                    cy-data='name'
                />
                {error.name.lenght > 0 ? (
                    <p className='error'>{errors.name}</p>
                ) : null}
            </FormGroup>
            <FormGroup>
                <Label htmlFor='email'>Email</Label>
                <Input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={formState.email}
                    onChange={handleChange}
                    cy-data='email'
                />
                {errors.email.length > 0 ? (
                    <p className='error'>{errors.email}</p>
                ) : null}
            </FormGroup>
            <FormGroup>
                <Label htmlFor='password'>Password</Label>
                <Input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={formState.password}
                    onChange={handleChange}
                    cy-data='password'
                />
                {errors.password.length > 0 ? (
                    <p className='error'>{errors.password}</p>
                ) : null}
            </FormGroup>
            <FormGroup check>
                <Label check>
                    <Input
                        type='checkbox'
                        onChange={handleChange}
                        name='terms'
                        cy-data='terms'
                    />{' '}
                    I Agree to the Terms of Service
                </Label>
            </FormGroup>
            <Button
                color='primary'
                style={{ marginTop: '3%' }}
                type='submit'
                disabled={isDisabled}
                cy-data='submit'
            >
                Submit
            </Button>
        </Form>
    )
}

export default newForm