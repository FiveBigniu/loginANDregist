import axios from 'axios'
import qs from 'qs'
//import * as _ from '../util/tool'
axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = 'http://192.168.20.233:3000'; //配置接口地址

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
	//在发送请求之前做某件事
	if(config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	return config;
}, (error) => {
	console.log("错误的传参");
});

//返回成功状态判断 默认做什么事
axios.interceptors.response.use((res) => {
	//对响应数据做些事
	if(res.status != 200) {
		console.log(res+"1");
		return Promise.reject(res);
	}
	return res;
}, (error) => {
	alert("网络异常");
	return Promise.reject(error);
});
export default axios;

