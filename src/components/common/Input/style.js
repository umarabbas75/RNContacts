
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
    wrapper: {
        height: 45,
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 4,

    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
    },
    inputContainer: {
        paddingVertical: 8
    },
    error: {
        color: colors.danger,
        paddingTop: 4,
        fontSize: 12
    },
    icon: {
        position: 'absolute',
        top: 12,
        zIndex: 9999,
        
    },
    label : {
        marginBottom : 5
    }
});