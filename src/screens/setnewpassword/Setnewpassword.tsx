import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { ImageBackground, View, Text, ScrollView, Alert } from "react-native";
import Images from "../../assets/Images";
import Circle from "../../components/Circle";
import CustomInput from "../../components/CustomInput";
import Header from "../../components/Header";
import PrimaryButton from "../../components/PrimaryButton";
import { resetPassword } from "../../services/auth";
import { isValidPassword } from "../../util";
import styles from './styles'

const SetNewPassword = ({ route }) => {
    const [newPassword, setNewPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const navigation = useNavigation();

    const handleSubmit = () => {
        const { token, uid } = route.params
        const data = { token: token, uid: uid, new_password1: newPassword, new_password2: confirmPassword }
        if (newPassword === confirmPassword) {
            if (!isValidPassword(newPassword) && !isValidPassword(confirmPassword)) {
                Alert.alert("Password must contain atlease 8 characters")
                return
            }
            resetPassword(data).then((response) => {
                if (response?.status === 400) {
                    Alert.alert('Weak Password')
                    return 
                }
                console.log('res', response, 'data', data)
                setNewPassword("");
                setConfirmPassword("");
                navigation.navigate('SigninScreen')
                Alert.alert("Your password has been set Successfully")

            }).catch(error => {
                console.log(error.response);
            })
        }
        else {
            Alert.alert("Your New Password and Confirm Password Doesn't match")
        }
    }
    return (
        <View style={{ marginTop: -10 }}>
            <ImageBackground source={Images.Rectangle} style={styles.image} resizeMode="cover">
                <Header onPress={() => navigation.goBack()} />
                <ScrollView style={styles.body} >
                    <Circle sourceImage={Images.Laptop} CircleStyle={styles.circle} />
                    <Text style={styles.headingText}>Set new password</Text>
                    <CustomInput
                        label="New Password"
                        placeholder="New Password"
                        value={newPassword}
                        isRightIconVisible={true}
                        onChangeText={setNewPassword}
                        secureTextEntry={true} containerStyle={""} keyboardType={undefined} />
                    <CustomInput
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        isRightIconVisible={true}
                        value={confirmPassword}
                        isIconVisible={true}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={true} containerStyle={""} keyboardType={undefined} />
                    <View style={styles.footer}>
                        <PrimaryButton
                            isLoading={false}
                            text="Set New Password"
                            onPress={handleSubmit} style={{ marginTop: "38%" }} btnStyle={undefined} disabled={false} />
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}
export default SetNewPassword