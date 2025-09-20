import { createRouter, createWebHistory } from 'vue-router'
import LegoHome from '../views/LegoHome.vue'
import LegoEditor from '../views/LegoEditor.vue'
import TemplateDetail from '../views/TemplateList-Detail.vue'
import Index from '../views/Index.vue'
const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path:"/",
            name: 'index',
            component: Index,
            children: [
                { path: '', name: 'home', component: LegoHome },
                { path: 'template/:id', name: 'template', component: TemplateDetail },          
            ]
        },
        {
            path:"/editor",
            name: 'editor',
            component:LegoEditor
        }
    ]
})
export default router