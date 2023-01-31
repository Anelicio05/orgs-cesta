import React from "react";
import {StyleSheet, View, FlatList} from "react-native";

import Topo from "./componetes/Topo";
import Detalhes from "./componetes/Detalhes";
import Itens from "./componetes/Itens";
import Texto from "../../componemtes/Texto";

const Cesta = ({topo, detalhes, itens})=>{
    return<> 
        <FlatList
            data={itens.lista}
            renderItem={Itens}
            keyExtractor={({nome})=> nome}
            ListHeaderComponent={()=>{
                return<>
                    <Topo {...topo}/>
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />       
        
    </>

}
export default Cesta

const estilos = StyleSheet.create({
    cesta: {
       paddingVertical: 8,
       paddingHorizontal: 16
    },
    titulo:{
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },
})
