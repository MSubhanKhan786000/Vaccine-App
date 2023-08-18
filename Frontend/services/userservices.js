import GenericService from "../services/GenericServices";
import jwtDecode from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

class UserService extends GenericService{
    constructor() {
        super();   
    }

    login =  (email,password) => new Promise((resolve,reject)=>{
        this.post("http://192.168.1.103:4000/login",{email,password})
        .then(async token=>{
            const tok = await AsyncStorage.setItem("token", JSON.stringify(token));
            console.log(tok);
             resolve(token);
        })
        .catch((err)=>{
            reject(err);
        })
    })

    logout = () => {
        // localStorage.removeItem("token");
    };

    getLoggedInUser = async ()=>{
        try{
            const savedUser = await AsyncStorage.getItem("token");
            const currentUser = JSON.parse(savedUser);
            return jwtDecode(currentUser);

            // const jwt = JSON.parse(await AsyncStorage.getItem("token"))
            // return jwtDecode(jwt);
            // console.log(jwtDecode(jwt))
        }catch(ex){
            return null;
        }
    }


    isLoggedIn = async () =>{
        const userData = JSON.parse(await AsyncStorage.getItem("token"))
        return userData;
        // return localStorage.getItem("token") ? true: false;

    };


    register = (name,email,password,role) => 
        this.post("http://192.168.1.103:4000/signup",{name,email,password,role});
}



let userService = new UserService();
export default userService;