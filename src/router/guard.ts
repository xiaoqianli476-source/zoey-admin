import type { Router } from 'vue-router'

export function createRouterGuard(router: Router) {

    router.beforeEach((to, from, next) => {
        const token = localStorage.getItem('token')
        const isLogin = token !== null && token !== '' && token !== undefined

        if (isLogin) {
            if (to.name === 'login') {
                next({
                    name: 'home'
                })
                return
            }
            next()
            return
        }

        // 下面都是没有登录的
        if (to.name === 'login') {
            next()
        }
        next({
            name: 'login'
        })
        return false
    })
}
