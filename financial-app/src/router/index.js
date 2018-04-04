import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home.vue'
import Transaction from '../pages/transaction/transation.vue'
import WhiteBar from '../pages/white-bar/white-bar.vue'
import GroupMoney from '../pages/group-money/group-money.vue'
import Mine from '../pages/mine/mine.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/transaction',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/white',
      name: 'White',
      component: WhiteBar
    },
    {
      path: '/group',
      name: 'Group',
      component: GroupMoney
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
