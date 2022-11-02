import * as React from 'react';
import {
    Text, 
    TouchableOpacity,
    StyleSheet,
    View,
} from 'react-native';

export const PrimaryButton = (props)=>{
    if(props.isLoading){
        return(
            <View style={[style.btnPrimary, props.customeStyle]}>
                <Text style={{ color:'white'}}>Loading...</Text>
            </View>
        )
    }
    if(!props.isLoading){
        return (
            <TouchableOpacity onPress={props.onPress} style={[style.btnPrimary, props.customeStyle]}>
                <Text style={{ color:'white'}}>{props.title}</Text>
            </TouchableOpacity>
        )
    }
}

export const SuccessButton = (props)=>{
    return (
        <TouchableOpacity onPress={props.onPress} style={[style.btnSuccess, props.customeStyle]}>
            <Text style={{ color:'white'}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btnPrimary:{
        borderRadius:40,
        marginTop:10,
        padding:15,
        alignItems:'center',
        backgroundColor:'#A03E82'
    },
    btnSuccess:{
        borderRadius:40,
        marginTop:10,
        padding:15,
        alignItems:'center',
        backgroundColor:'#00AF3C'
    }
})