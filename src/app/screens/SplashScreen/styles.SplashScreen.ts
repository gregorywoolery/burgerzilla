import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header_container: {
        display: 'flex',
        justifyContent: "flex-end",
        flexDirection: 'row',
        width: '100%',
        paddingRight: 15
    },
    splash_text: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: 'center'
    },
    main_container: {
        display: 'flex',
        alignItems: 'center',
        padding: 10
    },
    main_text_container: {
        display: 'flex',
        alignContent: 'center',
        marginTop: 40,
        marginBottom: 20,
        paddingRight: 20,
        paddingLeft: 20
    },
    content_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '92%',
    },
    splash_button: {
        backgroundColor: '#48cf4d',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 5
    },
    button_text: {
        fontSize: 25,
        color: '#fff',
        fontWeight: "bold"
    }
});

export default styles;