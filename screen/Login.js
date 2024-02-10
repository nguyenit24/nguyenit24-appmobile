import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Alert, Button, TextInput } from 'react-native'
const Login = () => {
    return <View style={{
        backgroundColor: 'white',
        flex: 100,
    }}>
        {/* headerlogin */}
        {/* <ImageBackground > */}
        <View style={{
            flex: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>

            <Text style={{
                marginTop: 10,
                fontSize: 20,
                fontWeight: 'bold',
                width: '50%',
            }}>
                Already have an Account
            </Text>
            <Image
                source={require('../assets/computer.png')}
                style={{
                    height: 120,
                    width: 120,
                    tintColor: 'orange'
                }} />

        </View>
        {/* </ImageBackground> */}
        <View style={{
            marginHorizontal: 15,
            flex: 15,
        }}>
            <Text style={{
                color: 'red',
                fontSize: 18,
            }}>Email:</Text>
            <TextInput
                style={{
                    color: 'black'
                }}
                placeholder={'Example@gmail.com'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                fontSize={18}
            />
        </View>
        <View style={{
            marginHorizontal: 15,
            flex: 15,
        }}>
            <Text style={{
                color: 'red',
                fontSize: 18,
            }}>Password:</Text>
            <TextInput
                style={{
                    color: 'black',
                }}
                secureTextEntry={true}
                placeholder={'Enter your password'}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                fontSize={18}
                
            />
        </View>
        <TouchableOpacity
            style={{
                flex: 6,
                backgroundColor: 'aqua',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                width: '50%',

                alignSelf: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    padding: 10,
                }}
            >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
                flex: 8,
                justifyContent: 'center',
                borderRadius: 20,
                alignSelf: 'center'
            }}
        >
            <Text
                style={{
                    fontSize: 17,
                    padding: 10,
                    color: 'red'
                }}
            >New user? Register now!</Text>
        </TouchableOpacity>
        <View style={{
            flex: 25,
        }}>
            <View style={{
                flex: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginHorizontal: 30,
            }}>
                <View style={{
                    flex: 1,
                    height: 1,
                    borderWidth: 1,
                    width: '50%',
                }}></View>
                <View style={{
                    flex: 1,
                    fontSize: 15,
                }}>
                    <Text style={{
                        alignSelf: 'center',
                        color: 'orange'
                    }}>Use other methos?</Text>
                </View>
                <View style={{
                    flex: 1,
                    height: 1,
                    borderWidth: 1,
                    width: '50%'
                }}></View>
            </View>
            <View style={{
                flex: 15,
                flexDirection: 'row',
                justifyContent:'space-around',
                marginHorizontal: 140,
            }}>
                <Image source={require('../assets/facebook.png')}
                    style={{
                        height: 40,
                        width: 40,
                    }}
                />
                <Image source={require('../assets/youtube.png')}
                    style={{
                        height: 40,
                        width: 50,
                    }}
                />
            </View>
        </View>
    </View>
}
export default Login