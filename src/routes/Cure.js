import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native';
const Cure = ({navigation}) => {
    return (<View style={{marginTop : 32}}>
        <Text> Hi from cue page</Text>
        <TouchableOpacity
        onPress={()=>{navigation.push('cureDetail')}}
        >
            <Text> go to detail page</Text>
        </TouchableOpacity>
    </View>
    )
}

export default Cure
