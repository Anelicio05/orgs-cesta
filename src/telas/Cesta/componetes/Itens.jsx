import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Texto from "../../../componemtes/Texto";

export default function Itens ({item: {nome, imagem}}){
    return <View style={estilos.lista}>
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>
    </View> 
}

const estilos = StyleSheet.create({
    lista:{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    imagem:{
        width: 46,
        height: 46,
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646" 
    }
})