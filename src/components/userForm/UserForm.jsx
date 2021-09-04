import React, { useState } from 'react'
import styles from './userForm.module.css'
import { Formik, Form } from 'formik';
import MyTextInput from '../../util/myTextInput/MyTextInput';
import * as Yup from 'yup'
import { updateUserProfile, uploadFileToFirebaseStorage } from '../../firebase/firebaseUtil';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify'

const UserForm = () => {
    const history = useHistory()
    const [image, setImage] = useState(null)
    const { currentUser } = useSelector(state => state.auth)
    const [updating, setUpdating] = useState(false)

    const onSubmiHandler = async (values) => {
        try {
            await updateUserProfile(values)
            toast.success("Profile has been updated!", { hideProgressBar: true })
            history.push('/profile/details')
        }
        catch (error) {
            toast.error(error.message, { hideProgressBar: true })
        }
    }
    const handleChange = (e) => {

        const file = e.target.files[0]
        setImage(file)
    }

    const handleUpload = async (e) => {
        try {
            e.preventDefault()
            setUpdating(true)
            await uploadFileToFirebaseStorage(image)
            setUpdating(false)
            setImage(null)
            toast.success("Uploaded Image Successfully", { hideProgressBar: true })
        } catch (error) {
            toast.error(error.message, { hideProgressBar: true })
            setUpdating(false)

        }
    }

    return (
        <div className={styles.userForm}>
            <div className={styles.avatar}>
                <img src={currentUser?.photoURL || '/images/image-palceholder.png'} alt="jamilla smith" />
                <form onSubmit={handleUpload} className={styles.formUpload}>
                    <input type="file" onChange={handleChange} />
                    <button className={updating ? 'btn btn--profilePic disabled' : 'btn btn--profilePic'} disabled={updating}>
                        {!updating ? 'change avatar' : 'updating...'}
                    </button>
                </form>
            </div>
            <Formik
                initialValues={{
                    displayName: currentUser?.displayName ? currentUser.displayName : '',
                    email: currentUser?.email ? currentUser.email : '',
                    phoneNumber: currentUser?.phoneNumber ? currentUser.phoneNumber : '',
                    location: currentUser?.location ? currentUser.location : ''
                }}
                validationSchema={Yup.object({
                    displayName: Yup.string().required('Required'),
                    email: Yup.string().email().required('Required'),
                    phoneNumber: Yup.number().required('Required'),
                    location: Yup.string().required('Required')
                })}

                onSubmit={onSubmiHandler}
            >
                <Form>
                    <MyTextInput type='text' label='full name' name='displayName' />
                    <MyTextInput type='email' label='email' name='email' />
                    <MyTextInput type='tel' label='phone number' name='phoneNumber' />
                    <MyTextInput type='text' label='location' name='location' />
                    <button className='btn' type='submit'>save changes</button>
                </Form>
            </Formik>

        </div>
    )
}

export default UserForm
