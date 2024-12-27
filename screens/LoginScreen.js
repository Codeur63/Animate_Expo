import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TextInput } from 'react-native'
import Animated, {FadeIn, FadeInDown, FadeInUp, FadeOut} from 'react-native-reanimated'
import {useNavigation} from '@react-navigation/native'

export default function Login() {
    const navigation = useNavigation();
  return (
    <View className ="bg-white h-full w-full" style={{backgroundColor: 'white', width: '100%', height: '100%'}} >
      <StatusBar style =" light" />
      <Image className = "h-full w-full absolute" source={require('../assets/images/background.png')} style={{ height: '100%', width: '100%', position:'absolute'}}/>

      <View className=" flex-row justify-around w-full absolute" style={{ flexDirection:'row', justifyContent:'space-around', position:'absolute', width: '100%'}}>
        <Animated.Image  entering={FadeInUp.delay(200).duration(2000).springify().damping(3)} className=" h-[225] w-[90]" source={require('../assets/images/light.png')}/>
        <Animated.Image entering={FadeInUp.delay(400).duration(2000).springify().damping(3)} className=" h-[160] w-[65]" source={require('../assets/images/light.png')}/>
      </View>

      <View className=" h-full w-full flex justify-around pt-40 pb-10" style={{height: '100%', width:'100%', flex:1, justifyContent:'space-around', paddingTop: 40, paddingBottom: 10}}>
        <View className=" flex items-center" style={{ flex:1, alignItems:'center'}}>
          <Animated.Text entering={FadeInUp.delay(200).duration(2000).springify()} className=" text-white font-bold tracking-wider text-5xl p-8 " style={{color:'white' , fontWeight:'bold', letterSpacing:4 , padding:5, fontSize:40, position:'relative', top:270, alignItems:'center', textAlign:'center'}}>Login</Animated.Text>

        </View>
        <View className=" flex items-center mx-4 space-y-4" style={{flex:1, alignItems:'center', marginLeft:4, marginRight:4, marginVertical:4}}>
          <Animated.View entering={FadeInDown.duration(1000).springify()} className=" bg-black/5 p-5 rounded-2xl w-full" style={{backgroundColor:'rgba(0,0,0,0.05)', borderRaduis:5, padding:5, width:'100%'}}>
           <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className=" bg-black/5 p-5 rounded-2xl w-full mb-3" style={{backgroundColor:'rgba(0,0,0,0.05)', borderRaduis:5, marginBottom:5, width:'100%'}}>
           <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className=" w-full" style={{width:'100%'}}>
              <TouchableOpacity
                  className=" w-full bg-sky-400 p-2 rounded-2xl mb-3 h-15" style={{width:'100%', backgroundColor:'pink', borderRaduis:5, marginBottom:3, height: 15}} >
                      <Text className="text-xl font-bold-800 text-white text-center" style={{color:'white', fontSize:20, fontWeight:'bold', textAlign:'center'}}>Login</Text>
                  </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className=" flex-row justify-center" style={{flexDirection:'row', justifycontent:'center'}}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.push('SignUp')}>
              <Text className = "text-sky-600 " style={{fontSize:16, color:'pink'}}>SignUp</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
     );}
