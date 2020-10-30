import { HTTP } from 'utils/http';
import config from 'utils/config'

class DetailModel extends HTTP {
    getDetail(field, id){
        return new Promise((resolve,reject) => {
            this.axiosPost({
                url:config.API.GET_DETAIL,
                data:{
                    field,
                    id
                },
                success(data){
                    resolve({
                        data,
                        status:0
                    })
                },
                error(err){
                    resolve({
                        status:-1
                    })
                }
            })
        })
    }
}

export { DetailModel };