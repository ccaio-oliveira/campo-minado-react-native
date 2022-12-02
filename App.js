import { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import Field from './src/components/Field';
import params from './src/params';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
                <Text style={styles.instructions}>
                    Tamanho da grade: {params.getRowsAmount()} x {params.getColumnsAmount()}
                </Text>
                <Field />
                <Field opened/>
                <Field opened nearMines={1}/>
                <Field opened nearMines={2}/>
                <Field opened nearMines={3}/>
                <Field opened nearMines={6}/>
                <Field mined opened/>
                <Field mined opened exploded />
                <Field flagged />
                <Field flagged opened />
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
