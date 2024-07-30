import {
    ActivityIndicator,
    Dimensions,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import {Text, View} from "@/components/Themed";
import {Dispatch, useState} from "react";
import {Formik} from "formik";
// import { loginSchema, registerSchema } from "../lib/validation";
import {
    createUserWithEmailAndPassword,
    inMemoryPersistence,
    setPersistence,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import {auth} from "@/lip/firebase";
import {Redirect, useRouter} from "expo-router";
import {addDoc, collection} from "firebase/firestore";
import {useGlobalContext} from "@/context";

const {height} = Dimensions.get("window");


export default function Auth() {
    const [state, setstate] = useState<"login" | "register">("login");

    const {user} = useGlobalContext();

    if (user !== null) return <Redirect href={"/account"}/>;


    return (
        <View style={{flex: 1}}>
            <ImageBackground
                source={{uri: "https://rb.gy/0oz37g"}}
                resizeMode="cover"
                style={{
                    flex: 1,
                    position: "relative",
                }}
            >
                <View style={styles.overlay}/>
                <SafeAreaView>
                    <Image
                        source={require("../assets/images/netflix.png")}
                        resizeMode="contain"
                        style={styles.logo}
                    />
                </SafeAreaView>
                <KeyboardAvoidingView
                    style={{height}}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.wrapper}>
                        <View style={styles.form}>
                            {state === "login" && <Login  />}
                            {state === "register" && <Register  />}
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        </View>
    );
}


function Login() {
    return (
        <View>
            <Text>Login</Text>
        </View>
    );
}

function Register() {
    return (
        <View>
            <Text>Register</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0.7)",
        flex: 1,
    },
    logo: {
        width: 150,
        height: 40,
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    form: {
        width: "90%",
        minHeight: height / 3,
        borderRadius: 10,
        padding: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    },
    input: {
        width: "96%",
        height: 50,
        borderWidth: 0,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#333",
        color: "white",
        marginTop: 20,
    },
    formButton: {
        width: "96%",
        height: 50,
        backgroundColor: "#E7442E",
        marginTop: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0,
    },
    textButton: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
    },
    bottomContent: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        gap: 10,
    },
    alert: {
        backgroundColor: "rgba(255,0,0,0.5)",
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    alertText: {
        color: "rgb(255,0,0)",
        fontWeight: "bold",
    },
});