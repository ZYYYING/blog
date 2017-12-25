import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
import Blgo from '../components/Blgo.vue';
import Content from '../components/Content.vue';
import Resume from '../components/Resume.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'main',
        component: Content,
        children: [{
            path: '/',
            name: 'resume',
            component: Resume
        },{
            path: '/blog',
            name: 'blgo',
            component: Blgo
        }]
    }]
})
