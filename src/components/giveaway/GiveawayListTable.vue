<template>
  <v-container fluid class="white--text">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <BaseCard title="My Giveaways">
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <BaseButton class="float-left" x-large color="success" to="/giveaway-setup">
                  <BaseIcon name="plus" /> New Giveaway
                </BaseButton>
              </v-col>
            </v-row>
            <v-row align="start" justify="center">
              <v-col cols="12">
                <BaseDataTable
                  :headers="headers"
                  :items="giveaways"
                  :loading="loading"
                  hide-default-footer
                  class="giveaway-rows"
                  @click:row="detailGiveaway"
                />
              </v-col>
            </v-row>
          </v-container>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { BaseCard, BaseDataTable, BaseButton, BaseIcon } from '../baseComponents'
import axios from 'axios'
import { authHeader } from '../../helpers/authHeader'
export default {
  name: 'GiveawayListTable',
  components: { BaseCard, BaseDataTable, BaseButton, BaseIcon },
  data() {
    return {
      pagination: {
        sortBy: 'date',
        page: 1,
        rowsPerPage: 100000,
        descending: true,
        totalItems: 0
      },
      headers: [
        { text: 'Giveaway Name', value: 'name' },
        { text: 'Participants ', value: 'participantQuantity' },
        { text: 'Draw Date ', value: 'drawDate' },
        { text: 'Creation Date ', value: 'creationDate' },
        { text: 'Status ', value: 'status' }
      ],
      loading: true,
      giveaways: [],
      serverError: ''
    }
  },
  created() {
    this.loadGiveaways()
  },
  methods: {
    loadGiveaways() {
      let timeZone = new Date().getTimezoneOffset() //  get the client Time Zone
      axios
        .get(
          `${process.env.VUE_APP_API_BASE_URL}/api/v1.0/giveaways/list?userId=` +
            this.$store.state.user.id +
            '&timeZone=' +
            timeZone,
          authHeader(this.$store.state.user.token)
        )
        .then(response => {
          this.giveaways = response.data.response
          this.loading = false
        })
        .catch(error => {
          if (error.response.status === 401) {
            this.$router.push('/account-login')
          }
          this.serverError = error
          this.loading = false
        })
    },
    detailGiveaway(giveaway) {
      this.$store.commit('SetGiveaway', { giveaway: giveaway })
      this.$router.push('/giveaway-info')
    }
  }
}
</script>

<style>
.giveaway-rows {
  cursor: pointer;
}
</style>
