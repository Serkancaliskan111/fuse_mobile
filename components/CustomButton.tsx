import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, {Activity} from 'react'
import {CustomButtonProps, CustomInputProps} from "@/type";
import cn from "clsx";

const CustomButton = ({
    onPress,
    title = 'Click Me',
    style = {},
    textStyle = {},
    leftIcon,
    isloading=false,

                      }:CustomButtonProps) => {
    return (
        <TouchableOpacity className={cn('custom-btn',style)} onPress={onPress}>
            {leftIcon}
            <View className={"flex-center flex-row"}>
                {isloading ? (
                    <ActivityIndicator  size={"small"} color="white" />
                ):(
                    <Text className={cn('text-white-100 paragraph-semibold', textStyle)}>{title}</Text>
                ) }
            </View>
        </TouchableOpacity>
    )
}
export default CustomButton
