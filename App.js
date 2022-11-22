import { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import params from './src/params';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
                <Text style={styles.instructions}>
                    Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
