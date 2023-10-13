import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.search}>
                <Text>search</Text>
            </View>
            <View style={styles.list}>
                <Text>list</Text>
            </View>
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    search: {
        flex: 0.1,
        backgroundColor: 'green',
        justifyContent: 'center',
        paddingLeft: 10
    },
    list: {
        flex: 1,
        backgroundColor: 'blue',
        padding: 10
    }
});
