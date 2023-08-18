import React,{useState} from "react";
import {View,Text, SafeAreaView, StyleSheet, ScrollView,Pressable} from 'react-native';

import PersonalModel from "../../components/user/PersonalModel";

import Ionicons from '@expo/vector-icons/Ionicons';
const Family = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <>
            <View style={style.container}>
                <ScrollView>

                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:25,textAlign:'center',fontWeight:'900'}}>
                        Family
                    </Text>
                </View>
                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:'100%',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}> 
                    {/* 1 - start */}
                     <Pressable
                        // style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}>
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Child</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    </Pressable>
                    {/* 1 - end */}

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Mother</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}


                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}


                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}
                    

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}
                    

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}
                    

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}
                    

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}
                    

                    {/* 1 - start */}
                    <View style={{backgroundColor:"#3C7DA3",width:150,height:150,borderRadius:10,justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons name='person' size={45} color='white' />
                        <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Son's</Text>
                        <Text style={{color:"white"}}>Profile</Text>
                    </View>
                    {/* 1 - end */}
                    





                </View>
                
                </ScrollView>
{/* Profile MODEL start */}

                <PersonalModel  modalVisible={modalVisible} setModalVisible={setModalVisible} />

{/* Profile Model End */}
            </View>
        </>
    )
}


const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
       

    }
})


export default Family;