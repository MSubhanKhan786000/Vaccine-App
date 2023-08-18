import React from 'react';
import { Text,View,StyleSheet,ScrollView } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const ChildTrack = () => {
  return (
    <>
            <View style={style.container}>
            <ScrollView width="100%">
                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:20,padding:20,textAlign:'center',fontWeight:'700'}}>
                        ChildTrack
                    </Text>
                </View>

                <View style={{backgroundColor:"#FFFFFF",width:"90%",alignSelf:'center',borderRadius:10,}}>
                    <Text style={{fontSize:13,fontWeight:'700',color:'black',padding:10,textAlign:'center'}}>ADIL HUSSAIN</Text>
                </View>                



                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"90%",alignItems:'center',alignSelf:'center',borderRadius:10,}}> 
                    <View style={{backgroundColor:"#FFFFFF",width:"90%",alignSelf:'center',height:100,borderRadius:10,justifyContent:'space-evenly',alignItems:'center',marginTop:20,marginBottom:5,}}>
                        <View style={{width:"90%",flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
                            <View ><Text>Height: 72.00cm </Text></View>
                            <View ><Text>Weight: 80Kg</Text></View>
                        </View>
                        <View style={style.line}></View>
                        <View style={{width:"90%",flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
                            <View ><Text>EDIT </Text></View>
                            <View ><Text>DEL</Text></View>
                        </View>
                    </View>
                    
                    <View style={{justifyContent:'flex-start',width:'80%'}}>
                        <View style={{backgroundColor:'#F6F6F6'}}><Text>INJECTED VACCINE</Text></View>
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <MaterialCommunityIcons name="hand-back-right" size={35} color="black" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <MaterialCommunityIcons name="hand-back-right" size={35} color="black" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <MaterialCommunityIcons name="hand-back-right" size={35} color="black" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}

                    </View>



                    <View style={{justifyContent:'flex-start',width:'80%'}}>
                        <View style={{backgroundColor:'#F6F6F6',marginTop:20,}}><Text>REMANING VACCINE</Text></View>
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <MaterialCommunityIcons name="hand-back-right" size={35}  fill="white" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <MaterialCommunityIcons name="hand-back-right" size={35} color="black" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}
                        {/* 1 */}
                        <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                            <MaterialCommunityIcons name="hand-back-right" size={35} color="black" />

                            <View style={{flexDirection:'column',}}>
                                <Text style={{fontSize:11,fontWeight:'bold'}}>Hepatitus B</Text>
                                <Text style={{fontSize:10,}}>Vaccine name: bOPV</Text>
                                <Text style={{fontSize:10,}}>Given on 05/06/2022 At ...</Text>
                            </View>
                            <View><Text style={{backgroundColor:"#C2185B",borderRadius:5,padding:2,}}>feedback</Text></View>
                        </View>
                        {/* 1 end */}

                    </View>


                </View>
                </ScrollView>
            </View>
    </>
  )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3C7DA3'
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0', // Set your desired line color
        marginTop:10,
        alignSelf:'center'
  },
})

export default ChildTrack;