<template>
  <div>
    <v-app-bar color="white" height="70px">
      <div class="ramdomizer-logo">
        <router-link to="/">
          <BaseImage :src="require('@/assets/images/ramdomizer-logo.png')" alt="ramdomizer-logo" />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <BaseButton v-for="route in toolBarRoutes" :key="route.name" text :to="route.path">
          {{ route.name }}
        </BaseButton>
      </v-toolbar-items>
      <v-app-bar-nav-icon :class="{ 'hidden-sm-and-up': !isUserLogged }" @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
    </v-app-bar>
    <!-- NAVIGATION DRAWER -->
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item v-for="route in navigationDrawerRoutes" :key="route.name" link :to="route.path">
          <v-list-item-icon>
            <BaseIcon :name="route.icon" />
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="isUserLogged" @click.stop="logOut">
          <v-list-item-icon>
            <BaseIcon name="logout" />
          </v-list-item-icon>
          <v-list-item-content class="text-left">
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { BaseButton, BaseIcon, BaseImage } from '../baseComponents'
const userLoggedState = {
  yes: 'user needs to be logged in',
  no: 'user does not need to be logged in',
  none: 'user could be logged in or no'
}
export default {
  name: 'TheHeader',
  components: { BaseButton, BaseIcon, BaseImage },
  data() {
    return {
      isUserLogged: false,
      drawer: false,
      routes: [
        { name: 'My Giweaways', icon: 'gift', needUserLogged: userLoggedState.yes, path: '/giveaway-list' },
        { name: 'Account', icon: 'account-circle', needUserLogged: userLoggedState.yes, path: '/account-info' },
        { name: 'Examples', icon: 'view-dashboard', needUserLogged: userLoggedState.none, path: '/examples' },
        { name: 'Pricing', icon: 'currency-usd', needUserLogged: userLoggedState.none, path: '/pricing' },
        { name: 'Log In', icon: 'login', needUserLogged: userLoggedState.no, path: '/account-login' },
        { name: 'Sign Up', icon: 'account-plus', needUserLogged: userLoggedState.no, path: '/account-signup' },
        { name: 'Contact', icon: 'contact-mail', needUserLogged: userLoggedState.none, path: '/contact' }
      ]
    }
  },
  computed: {
    toolBarRoutes() {
      if (!this.isUserLogged) {
        return this.routes.filter(route => route.needUserLogged !== userLoggedState.yes)
      } else return null
    },
    navigationDrawerRoutes() {
      if (this.isUserLogged) {
        return this.routes.filter(route => route.needUserLogged !== userLoggedState.no)
      } else {
        return this.routes.filter(route => route.needUserLogged !== userLoggedState.yes)
      }
    }
  },
  methods: {
    logOut() {
      alert('Logging out!!!')
    }
  }
}
</script>

<style>
.ramdomizer-logo {
  width: 170px;
}
</style>
