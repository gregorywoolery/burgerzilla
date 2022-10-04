import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    main_container: {
        padding: 10
    },
    header_container: {
        display: 'flex',
        justifyContent: "flex-end",
        flexDirection: 'row',
        width: '100%',
        paddingRight: 15
    },
    content_container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '92%',
    },
    main_text_container: {
        marginTop: 40,
        marginBottom: 20,
        paddingRight: 20,
        paddingLeft: 20
    },
    splash_text: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: 'center'
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