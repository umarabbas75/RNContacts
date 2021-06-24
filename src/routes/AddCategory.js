import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native';
const AddCategory = ({navigation}) => {
    return (<View style={{marginTop : 32}}>
        <Text>hi from add category pages</Text>

        <TouchableOpacity
        // onPress={()=>{navigation.navigate('cure')}} this will work fine
        // onPress={()=>{navigation.navigate('cureDetail')}} this will give error
        onPress={()=>{navigation.navigate('cure', { screen: 'cureDetail' });}} // this will work fine too
        >
            <Text> go to cureDetail</Text>
        </TouchableOpacity>
    </View>
    )
}

export default AddCategory
