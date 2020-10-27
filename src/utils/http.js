// qs.stringify(data)  => id=1&test=test
// qs.parse('id=1&test=test') => data={id:1, text:'text'}
import axios from 'axios';
import qs from 'qs';

class HTTP {
    axiosPost(options){
        axios({
            url:options.url,
            method:'post',
            header:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            data:qs.stringify(options.data)
        }).then( (res) => {
            options.success(res);
        }).catch( (err) => {
            options.error(err)
        })
    }
}

export { HTTP };