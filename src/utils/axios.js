import request from './request'
export default{
	post(url,data){
        console.log(url,data)
        return new Promise((resolve,reject)=>{
            request.post(url,data)
            .then((res)=>{
                resolve(res)
            })
            .catch((err)=>{
                console.log(err)
                reject(err)
            })
        })
	},	
}
  