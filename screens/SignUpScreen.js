import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { TextInput, Alert } from 'react-native'
import Animated, {FadeIn, FadeInDown, FadeInUp, FadeOut} from 'react-native-reanimated'
import {useNavigation} from '@react-navigation/native'

export default function SignUpScreen() {
    const navigation = useNavigation();
  return (
    <View className = " bg-white h-full w-full" style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <StatusBar style = " light" />
      <Image className = " h-full w-full absolute" source={require('../assets/images/background.png')} style={{ height: '100%', width: '100%', position:'absolute'}}/>

      <View className=" flex-row justify-around w-full absolute" style={{ flexDirection:'row', justifyContent:'space-around', position:'absolute', width: '100%'}}>
        <Animated.Image  entering={FadeInUp.delay(200).duration(2000).springify().damping(3)} className=" h-[225] w-[90]" source={require('../assets/images/light.png')}/>
        <Animated.Image entering={FadeInUp.delay(400).duration(2000).springify().damping(3)} className=" h-[160] w-[65]" source={require('../assets/images/light.png')}/>
      </View>

      <View className=" h-full w-full flex justify-around pt-48" style={{height: '100%', width: '100%', justifyContent:'space-around', paddingTop:20}}>
        <View className=" flex items-center" style={{flex:1, alignItems:'center'}}>
          <Text className="text-white font-bold tracking-wider text-5xl p-5" style={{color:'white' , fontWeight:'bold', letterSpacing:4 , padding:5, fontSize:40, position:'relative', top:270, alignItems:'center', textAlign:'center'}}>Sign Up</Text>
        </View>
        <View className=" flex items-center mx-4 space-y-4" style={{flex: 1, alignItems:'center', marginHorizontal:4, marginLeft:4, marginRight:4, marginVertical:4}}>
          <Animated.View entering={FadeInDown.duration(1000).springify()} className=" bg-black/5 p-5 rounded-2xl w-full" style={{ backgroundColor:'rgba(0,0,0,0.05)', padding:5, borderRaduis: 30, width:'100%'}}>
           <TextInput placeholder='Username' placeholderTextColor={'gray'}/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className=" bg-black/5 p-5 rounded-2xl w-full" style={{ backgroundColor:'rgba(0,0,0,0.05)', padding:5, borderRaduis: 30, width:'100%'}}>
           <TextInput placeholder='Email' placeholderTextColor={'gray'}/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className=" bg-black/5 p-5 rounded-2xl w-full mb-3"  style={{ backgroundColor:'rgba(0,0,0,0.05)', padding:5, borderRaduis: 30, marginBottom: 3, width:'100%'}}>
           <TextInput placeholder='Password' placeholderTextColor={'gray'} secureTextEntry/>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className=" w-full" style={{width:'100%'}}>
              <TouchableOpacity
                  className=" w-full bg-sky-400 p-2 rounded-2xl mb-3 h-15"
                  style={{width: 'full', backgroundColor:' pink', padding:2, borderRaduis: 10, marginBottom: 3, height:15}}
                   onPress={()=> Alert.alert("Bienvenue")} >
                      <Text className="text-xl font-bold-800 text-white text-center" style={{color:'white', fontSize:16, fontWeight:'bold', textAlign:'center'}}>Sign Up</Text>
                  </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className=" flex-row justify-center" style={{flexDirection:'row', justifyContent:'center' }}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.push('Login')}>
              <Text className = "text-sky-600 " style={{fontSize:16, color:'pink'}}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
