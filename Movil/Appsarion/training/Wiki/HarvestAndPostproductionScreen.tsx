import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import AestheticText from '../../components/AestheticText';

export function HarvestAndPostproductionScreen(){
    return (
    <ScrollView style={styles.container}>
        <View style={styles.content}>
        <AestheticText
            title="COSECHA Y POST PRODUCCIÓN"
            content="La cosecha es el proceso de extracción de los peces del agua una vez que han alcanzado su tamaño de mercado. Dependiendo de la especie y el sistema de cultivo, las técnicas de cosecha pueden variar. En sistemas de jaulas flotantes, la cosecha generalmente se realiza mediante redes grandes, mientras que en estanques, los peces se capturan usando redes o trampas. Durante la cosecha, es esencial minimizar el estrés de los peces, ya que esto puede afectar la calidad del producto final."
        />
        
        <View style={styles.spacer} />
        
        <AestheticText
            content="Una vez cosechados, los peces deben ser procesados rápidamente para garantizar su frescura. Los métodos más comunes de post-producción incluyen la refrigeración, congelación, y la conservación por ahumado o salazón. La temperatura es un factor crítico para la conservación: el pescado debe mantenerse en condiciones frías inmediatamente después de la cosecha para prevenir el crecimiento bacteriano y asegurar la calidad."
        />
        
        <View style={styles.spacer} />
        
        <AestheticText
            content="La clasificación y el empaque también son procesos fundamentales para la post-producción. Los peces se clasifican según su tamaño, peso y calidad, y luego se empacan en condiciones sanitarias adecuadas para su transporte a los mercados. Es fundamental seguir las normativas sanitarias locales e internacionales para evitar contaminaciones y garantizar la trazabilidad del producto."
        />
        </View>
    </ScrollView>
    );
};
    
export default HarvestAndPostproductionScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
    },
    content: {
        padding: 20,
    },
    spacer: {
        height: 20, 
    },
});