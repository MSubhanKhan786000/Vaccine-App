import React,{useEffect,useState} from 'react'
import {View,Text,StyleSheet,Image, ScrollView, TouchableHighlight,TouchableOpacity, Pressable, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


import axios from 'axios';
import person from "../../assets/person.jpg"

import PersonalModelProfile  from '../../components/user/PersonalModelProfile';
// IP Address
const ip = "";

const UserProfile = ({navigation}) => {

    
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://192.168.1.103:4000/OnlyUserRoutes/profile');
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
    
    return ( 
        <>

{data ? (
  <ProfileCOmponent data = {data} navigation={navigation}/>
) : (
  <Text>Loading data...</Text>
)}

      </>
    )
}


const ProfileCOmponent = ({data,navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
                <ScrollView>
            {/* {console.log("DATA : ", data)} */}
            <View style={{flex:1}}>
    
                <View style={{height:300,justifyContent:'center',backgroundColor:'#329998',borderBottomLeftRadius:40,borderBottomRightRadius:40,}}>
                    <Pressable onPress={()=>{navigation.navigate("Homeuser")}}><Ionicons name="arrow-back-circle-sharp" size={40} color="white" style={{justifyContent:'flex-start',alignItems:'flex-start',marginTop:40,marginLeft:20}}/></Pressable>
                    <View style={{alignItems:'center'}}>
                      <Image source={person}  style={{width:100,height:100, borderRadius:100}} />
                      <AntDesign name="pluscircle" size={24} color="white"  style={{marginTop:-15,}} />
                      <Text style={{margin:5,color:'white',fontWeight:'bold',fontSize:20,}}>{data[0] ? data[0].name.toUpperCase() : ""}</Text>
                      <Text style={{margin:0,color:'white',marginBottom:10}}>{data[0] ? data[0].country : ""}</Text>
                      <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Feather name="edit" size={35} color="white" />
                      </Pressable>
                    {/* <TouchableOpacity onPress={()=>{ navigation.navigate("PersonalModel")}}> */}
                        <Text style={{color:"white"}}>EDIT</Text>
                    {/* </TouchableOpacity> */}
                    <Pressable onPress={()=>{
                        data[0]._id ?  
                        (axios
                        .delete(`http://192.168.1.103:4000/OnlyUserRoutes/profile/${data[0]._id}`)
                        .then((res) => {
                        console.log(res.data);
                        console.log("Profile Save!! ")
                        Alert.alert("Delete Record")
                        navigation.navigate("Homeuser")
                        })
                        .catch((err)=> {
                        console.log(err);
                        })
                        ): (
                          Alert.alert("Sorry, have no  Record")
                        )
                    }}>
                      <Text style={{padding:10,backgroundColor:'red',color:"white",borderRadius:10}}>Delete</Text>
                    </Pressable>

                    </View>
                </View>

                <View style={{flex:6/10,margin:40}}>
        {/* first field */}
                    {/* <Text style={{color:"gray"}}>Email:</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Sp20-BCS-149@gmail.com</Text>
                    <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View> */}
        {/* Second field */}
                    <Text style={{color:"gray"}}>Phone:</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{data[0] ? data[0].phoneno : ""}</Text>
                    <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View>
        {/* Second field */}
                    <Text style={{color:"gray"}}>CNIC:</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{data[0] ? data[0].cnic : ""}</Text>
                    <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View>
        {/* Second field */}
                    <Text style={{color:"gray"}}>Age:</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{data[0] ? data[0].age : ""}</Text>
                    <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View>
        {/* Second field */}
                    <Text style={{color:"gray"}}>Gender:</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{data[0] ? data[0].gender : ""}</Text>
                    <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View>
        {/* Second field */}
                    <Text style={{color:"gray"}}>Allergies:</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{data[0] ? data[0].allergies : ""}</Text>
                    <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View>
        {/* Second field */}
                    <Text style={{color:"gray"}}>Medical:</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>{data[0] ? data[0].medical : ""}</Text>
                    <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View>
{/*  */}
                    {/* <Text style={{color:"gray"}}>Email:</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>Sp20-BCS-149@gmail.com</Text>
                    <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View>
 */}

{/*  update Profile Model */}
  <PersonalModelProfile   modalVisible={modalVisible} setModalVisible={setModalVisible} />
{/* end  */}
                </View>
            </View>
            </ScrollView> 

   );
}
 


export default UserProfile;