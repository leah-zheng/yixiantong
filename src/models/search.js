import { HTTP } from 'utils/http';
import config from 'utils/config'

class SearchModel extends HTTP {
    searchAction(keyword,cityId){
        return new Promise((resolve,reject)=>{
            this.axiosPost({
                url:this.config.API.SEARCH_ACTION,
                data:{
                    keyword,
                    cityId
                },
                success(data){
                    resolve({
                        stutus:0,
                        data
                    })
                },
                error(error){
                    resolve({
                        stutus:-1,
                        error
                    })
                }
            })
        })
    }
}

export { SearchModel };