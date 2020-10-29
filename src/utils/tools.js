export default {
	formatJSON (array,key){
		return array.filter(item =>{
			if(item[key]){
				item[key] = item[key].split(',')
			}

			return item;
		})
	}
}




