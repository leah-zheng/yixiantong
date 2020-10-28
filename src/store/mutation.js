export default {
    selectCity(state,cityInfo){
        state.cityId = cityInfo.cityId;
        state.cityName = cityInfo.cityName;

        try {
            localStorage.cityInfo = JSON.stringify(state);
        }catch(e){}
    },
    selectField(state,field){
        state.field = field;
        try {
            localStorage.cityInfo = JSON.stringify(state); 
        }catch(e){}
    }
}