import { configureStore, createSlice } from '@reduxjs/toolkit';

// let [username, setUsername] = useState('tom');

let userSlice = createSlice({
    name : 'username',
    initialState : 'tom',
    reducers : {

        //          state : 기존 값
        saveUserName(state, action){
            // return state + 'add';   //tom tomadd tomaddadd ...
            //

            console.log(action.payload); // abc
            //action.payload = 매개변수로 들어온 'abc'

            return action.payload;  // -> state 변수 값으로 저장
        },
        clearUserName(state){
            return 'clean';
        },
        saveUserInfo(state, action){

            console.log(action.payload);    //{id:'abc', name:'Bob'}
            console.log(action.payload.id);
            console.log(action.payload.name);

            let {id, name} = action.payload;
            console.log(id);
            console.log(name);

            return state;
        }
    }
});

//store 전체기준 리덕스 저장 객체

export let {saveUserName, clearUserName, saveUserInfo} = userSlice.actions;
//actions : 상태관리하는 slice(변수)에 속한 상태변경 함수

let weather = createSlice({
    name : 'weather',
    initialState : {
        weather : "snowy",
        temperature : "2",
        humidity : "70"
    },
    reducers : {
        setWeatherInfo(state, action){
            let {weather, temperature, humidity} = action.payload;
            console.log(weather);
            console.log(temperature);
            console.log(humidity);

            state.weather = weather;
            state.temperature = temperature;
            state.humidity = humidity;

            /*
            return {
                weather : weather,
                temperature : temperature,
                humidity : humidity
            };*/
        }
    }
})

export let {setWeatherInfo} = weather.actions;


let companySlice = createSlice({
    name : "company",
    initialState : {
        name : "qwerComp",
        sid : "12125152",
        address : "주소"
    },
    reducers : {
        changeAddress(state, action) {
            state.address = action.payload;
            // dispatch(changeAddress('어디주소'));

            state.address = action.payload.address;
            // changeAddress({ address:'어디주소' });

            // dispatch(changeAddress({ address:'어디주소' }));
        }
    }
})

export default configureStore(
    {
        reducer: {
            user: userSlice.reducer,
            weather: weather.reducer,
            company: companySlice.reducer
        }
    }
)

export let {changeAddress} = companySlice.actions;
//import {changeAddress} ...
//useSelector( state => state.company )