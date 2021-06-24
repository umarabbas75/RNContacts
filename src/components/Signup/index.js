import React , {useState} from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container/index'
import Input from '../../components/common/Input'
import Button from '../../components/common/CustomButton'
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import { LOGIN } from '../../constants/routeNames'
const Signup = ({
    onChange,
    onSubmit,
    form,
    errors,
    setErrors,
    setForm
}) => {

    const navigation = useNavigation()
    const [isSecureEntry, setIsSecureEntry] = useState(true)

    const validate = (name, text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    email: 'Email  is not valid'
                }
            })
        }
        else {
            setErrors(prevState => {
                return {
                    ...prevState,
                    email: ''
                }
            })
            onChange(name, text)
        }

    }

    const validateConfirmPassword = (name, confirmPassword, prevPasswordField) => {
        let password = form[prevPasswordField]

        if (confirmPassword !== password) {
            setErrors(prevState => {
                return {
                    ...prevState,
                    confirmPassword: 'password does not match'
                }
            })
            setForm({
                ...form,
                [name]: confirmPassword
            })
        }
        else {
            setErrors(prevState => {
                return {
                    ...prevState,
                    confirmPassword: ''
                }
            })
            onChange(name, confirmPassword)
        }
    }

    const validatePassword = (name, password, confirmPasswordField) => {
        let confirmPassword = form['confirmPassword']

        console.log('=======confirmPassword======', confirmPassword)
        console.log('=======form======', form)
       // onChange(name, password)
        // onChange(name,password)

        if(confirmPassword){
            if(password !== confirmPassword){
                setErrors(prevState => {
                    return {
                        ...prevState,
                        confirmPassword: 'password do not match yar'
                    }
                })
                setForm({
                    ...form,
                    [name]: password
                })
            }
            else{
                setErrors(prevState => {
                    return {
                        ...prevState,
                        confirmPassword: ''
                    }
                })
                onChange(name,password)
            }
          console.log('======check---')
        }
        else{
            onChange(name,password)
        }
    }
    return (
        <Container>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logoImage}
            />

            <View>

                <Text style={styles.title}>Welcome to RNContacts</Text>
                <Text style={styles.subTitle}>Create a new account</Text>

            </View>

            <Input
                label="User Name"
                placeholder="Enter user name"
                onChangeText={(text) => {
                    onChange('userName', text)
                }}
                error={errors.userName && errors.userName}
            />
            <Input
                label="First Name"
                placeholder="Enter first name"
                onChangeText={(text) => { onChange('firstName', text) }}
                error={errors.firstName && errors.firstName}
            />
            <Input
                label="Last Name"
                placeholder="Enter last name"
                error={errors.lastName && errors.lastName}
                onChangeText={(text) => { onChange('lastName', text) }}
            />
            <Input
                label="Email"
                placeholder="Enter email"
                error={errors.email && errors.email}
                onChangeText={(text) => { validate('email', text) }}
            />
            <Input
                label="Password"
                placeholder="Enter passowrd"
                icon={isSecureEntry ?  <Text>Show</Text> :  <Text>hide</Text>}
                iconPosition="right"
                secureTextEntry={isSecureEntry}
                error={errors.password && errors.password}
                onChangeText={(text) => {
                    validatePassword('password', text, 'confirmPassword')
                }}
                onIconPress={()=>{setIsSecureEntry(!isSecureEntry)}}
            />
            <Input
                label="Confirm Password"
                placeholder="Enter passowrd"
                icon={isSecureEntry ?  <Text>Show</Text> :  <Text>hide</Text>}
                iconPosition="right"
                secureTextEntry={isSecureEntry}
                error={errors.confirmPassword && errors.confirmPassword}
                onChangeText={(confirmPassword) => { validateConfirmPassword('confirmPassword', confirmPassword, 'password') }}
                onIconPress={()=>{setIsSecureEntry(!isSecureEntry)}}
            />
            <Button
                title="Signup"
                onPress={onSubmit}
            />

            <View style={styles.createSection}>
                <Text style={styles.infoText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => {
                    navigation.push(LOGIN)
                }}>
                    <Text style={styles.linkBtn}>Login</Text>
                </TouchableOpacity>

            </View>

        </Container>
    )
}
const styles = StyleSheet.create({
    logoImage: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 21,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: "500"
    },
    subTitle: {
        fontSize: 17,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: "500"
    },
    createSection: {
        flexDirection: 'row'
    },
    linkBtn: {
        paddingLeft: 17,
        color: colors.primary,
        fontSize: 16
    },
    infoText: {
        fontSize: 17
    }
})
export default Signup
