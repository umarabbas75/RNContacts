import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './style';

const Input = ({
    onChangeText,
    iconPosition,
    icon,
    style,
    value,
    label,
    error,
    onIconPress,
    ...props
}) => {
    const [focused, setFocused] = useState(false);
    
    const getBorderColor = () => {
        if (error) {
            return colors.danger;
        }

        if (focused) {
            return colors.primary;
        } else {
            return colors.grey;
        }
    };
    const getPosition = () => {
        if (iconPosition === 'right') {
            return {
                right: 5,
            }
        }
        else {
            return {
                left: 5,
            }
        }
    }

    const getPadding = () => {

        if (icon && iconPosition === 'right') {
            return {
                paddingLeft: 5,
                paddingRight: 35
            }

        }
        else if (icon && iconPosition === 'left') {
            return {
                paddingLeft: 35,
                paddingRight: 5
            }
        }
        if (icon && !iconPosition) {
            return {
                paddingLeft: 35,
                paddingRight: 5
            }
        }
        else {
            return {
                paddingLeft: 5,
                paddingRight: 5
            }
        }
    }

    const renderError = () =>{
        if(error && error !== '' && error !== undefined && error !== null){
            return <Text style={styles.error}>{error}</Text>
        }
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View
                style={{
                    position: 'relative'
                }}
            >
                <TouchableOpacity
                    style={[styles.icon, getPosition()]}
                    onPress={onIconPress}
                >
                    {icon && icon}
                </TouchableOpacity>

                <TextInput
                    onChangeText={onChangeText}
                    style={[styles.textInput, getPadding(),
                    { borderColor: getBorderColor() }
                        , style]}
                    value={value}
                    onFocus={() => {
                        setFocused(true);
                    }}
                    onBlur={() => {
                        setFocused(false);
                    }}
                    {...props}
                />
            </View>
            {renderError()}
            {/* {error && error !== '' && <Text style={styles.error}>{error}</Text>} */}
        </View>
    );
};

export default Input;