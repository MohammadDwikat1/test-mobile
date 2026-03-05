import { StyleSheet, Text, View } from 'react-native';
import { WebView } from "react-native-webview";
import { SafeAreaView } from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
    return (
        <SafeAreaView style={styles.view} >
            <WebView
                source={{

                    uri: "https://www.google.com",


                }}
                style={styles.webview}



            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    view:{

        flex:1
        // This makes SafeAreaView take up the entire screen.
        // Or we can set width: '100%' and height: "100%" exactly

    },
    webview:{
        flex:1
        // By making the WebView take up the entire area of ​​each SafeAreaView, it will be taking up 100% of its height and width.
        //Or we can set width: '100%' and height: "100%" exactly

    },
});
