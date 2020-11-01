import { HTTP } from 'utils/http';
import config from 'utils/config'

class SearchModel extends HTTP {
    searchAction(keyword,cityId){
        return new Promise((resolve,reject)=>{
            this.axiosPost({
                url:config.API.SEARCH_ACTION,
                data:{
                    keyword,
                    cityId
                },
                success(data){
                    resolve({
                        status:0,
                        data
                    })
                },
                error(error){
                    resolve({
                        status:-1,
                        error
                    })
                }
            })
        })
    }
}

export { SearchModel };