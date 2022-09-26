import * as React from 'react';
import {
    Text, 
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const onBtnPress = ()=>{
    alert('asdf')
}

export const PrimaryButton = ({title="",customeStyle={}})=>{
    return (
        <TouchableOpacity onPress={onBtnPress} style={[style.btnPrimary, customeStyle]}>
            <Text style={{ color:'white'}}>{title}</Text>
        </TouchableOpacity>
    )
}

export const SuccessButton = ({title="",customeStyle={}})=>{
    return (
        <TouchableOpacity onPress={onBtnPress} style={[style.btnSuccess, customeStyle]}>
            <Text style={{ color:'white'}}>{title}</Text>
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