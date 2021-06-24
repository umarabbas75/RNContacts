import React from 'react'
import { Text, Image, StyleSheet,View, TouchableOpacity } from 'react-native';
import Container from '../../components/common/Container/index'
import Input from '../../components/common/Input'
import Button from '../../components/common/CustomButton'
import { useNavigation } from '@react-navigation/native';
import colors from '../../assets/theme/colors';
import {REGISTER} from '../../constants/routeNames'
const Login = () => {

    const navigation = useNavigation()
    return (
        <Container>
        <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
        />

        <View>

            <Text style={styles.title}>Welcome to RNContacts</Text>
            <Text style={styles.subTitle}>Please login here</Text>

        </View>
        <Input
            label="User name"
            placeholder="Enter User name"
        />
        <Input
            label="Password"
            placeholder="Enter passowrd"
            icon={<Text>Show</Text>}
            iconPosition="right"
            secureTextEntry={true}
        />
        <Button
            title="login"

        />

        <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity onPress={()=>{
                navigation.push(REGISTER)
            }}>
                <Text  style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          
        </View>

    </Container>
    )
}
const styles  = StyleSheet.create({
    logoImage : {
        width : 150,
        height : 150,
        alignSelf : 'center',
        marginTop : 50
    },
    title :{
        fontSize : 21,
        textAlign : 'center',
        paddingTop : 20,
        fontWeight : "500"
    },
    subTitle : {
        fontSize : 17,
        textAlign : 'center',
        paddingVertical : 20,
        fontWeight : "500"
    },
    createSection : {
        flexDirection : 'row'
    },
    linkBtn : {
        paddingLeft : 17,
        color : colors.primary,
        fontSize : 16
    },
    infoText : {
        fontSize : 17
    }
})
export default Login
