/* eslint-disable prettier/prettier */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'TheHome', component: () => import('@/views/TheHome.vue') },
  { path: '/account-change-password', name: 'AccountChangePassword', component: () => import('@/views/AccountChangePassword.vue') },
  { path: '/account-change-password-confirmation',  name: 'AccountChangePasswordConfirmation', component: () => import('@/views/AccountChangePasswordConfirmation.vue') },
  { path: '/account-confirmed', name: 'AccountConfirmed', component: () => import('@/views/AccountConfirmed.vue') },
  { path: '/account-delete', name: 'AccountDelete', component: () => import('@/views/AccountDelete.vue') },
  { path: '/account-forgot-password', name: 'AccountForgotPassword', component: () => import('@/views/AccountForgotPassword.vue')},
  { path: '/account-forgot-password-email-sent', name: 'AccountForgotPasswordEmailSent', component: () => import('@/views/AccountForgotPasswordEmailSent.vue')},
  { path: '/account-info', name: 'AccountInfo', component: () => import('@/views/AccountInfo.vue') },
  { path: '/account-login', name: 'AccountLogin', component: () => import('@/views/AccountLogin.vue') },
  { path: '/account-reset-password', name: 'AccountResetPassword', component: () => import('@/views/AccountResetPassword.vue')},
  { path: '/account-signup', name: 'AccountSignup', component: () => import('@/views/AccountSignup.vue') },
  { path: '/account-unverified', name: 'AccountUnverified', component: () => import('@/views/AccountUnverified.vue') },
  { path: '/contact', name: 'TheContact', component: () => import('@/views/TheContact.vue') },
  { path: '/examples', name: 'TheExamples', component: () => import('@/views/TheExamples.vue') },
  { path: '/giveaway-info', name: 'GiveawayInfo', component: () => import('@/views/GiveawayInfo.vue') },
  { path: '/giveaway-list', name: 'GiveawayList', component: () => import('@/views/GiveawayList.vue') },
  { path: '/giveaway-participants', name: 'GiveawayParticipants', component: () => import('@/views/GiveawayParticipants.vue')},
  { path: '/giveaway-thanks', name: 'GiveawayThanks', component: () => import('@/views/GiveawayThanks.vue') },
  { path: '/giveaway-winners', name: 'GiveawayWinners', component: () => import('@/views/GiveawayWinners.vue') },
  { path: '/link/:giveawayId', name: 'GiveawayPublicLink', meta: { layout: 'no-header-no-footer' }, component: () => import('@/views/GiveawayPublicLink.vue')},
  { path: '/page-not-found', name: 'ThePageNotFound', component: () => import('@/views/ThePageNotFound.vue') },
  { path: '/pricing', name: 'ThePricing', component: () => import('@/views/ThePricing.vue') },
  { path: '/privacy', name: 'ThePrivacy', component: () => import('@/views/ThePrivacy.vue') },
  { path: '/terms', name: 'TheTerms', component: () => import('@/views/TheTerms.vue') }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // returning the savedPosition with back/forward buttons
    } else {
      return { x: 0, y: 0 } // scroll to top
    }
  },
  mode: 'history'
})

export default router
