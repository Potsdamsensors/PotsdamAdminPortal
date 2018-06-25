import Vue from 'vue'
import App from './App.vue'
import Router from './router.js'
import VueResource from 'vue-resource'
import Auth from './Auth.js'
import VeeValidate from 'vee-validate'
import VueSwal from 'vue-swal'



Vue.use(VueResource)
Vue.use(Auth)
Vue.use(VeeValidate)
Vue.use(VueSwal)


Vue.http.options.root = 'http://codeneuron.com/potsdam/api/v1/'
//Vue.http.options.root = 'http://localhost/potsdam_api/v1/'
//Vue.http.headers.common['Access-Control-Allow-Headers'] = '*'
//Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()
Router.beforeEach(
	(to,from,next) => {
		if(to.matched.some(record => record.meta.forvisitors)) {
			if(Vue.auth.isAuthenticated()) { 
				
				next({
					path:'/userlist'
				})
			} else next()
		}
		else if(to.matched.some(record => record.meta.forAuth)) {
			if( ! Vue.auth.isAuthenticated()) {
				next({
					path:'/login'
				})
			} else next()
		}
		else next()
	}

)

new Vue({
  el: '#app',
  render: h => h(App),
  router : Router
})
