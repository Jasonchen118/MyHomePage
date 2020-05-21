import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home.vue'
import Learn from '../pages/learn/Learn.vue'
import Media from '../pages/media/Media.vue'
import Work from '../pages/work/Work.vue'

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/learn',
			name: 'Learn',
			component: Learn
		},
		{
			path: '/media',
			name: 'Media',
			component: Media
		},
		{
			path: '/work',
			name: 'Work',
			component: Work
		}
	],
	// mode: 'history'
})