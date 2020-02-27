<template>
  <v-container fluid class="white--text">
    <v-row align="center" justify="center">
      <v-col cols="12" md="4">
        <BaseCard title="New Giveaway">
          <v-container fluid>
            <v-row no-gutters>
              <v-col cols="12">
                <BaseForm>
                  <BaseTextField label="Title" hint="E.g. MyComapany iPhoneXs giveaway" />
                  <BaseTextField label="Prize" hint="E.g. iPhoneXs" />
                  <BaseTextarea
                    label="Description and/or rules (optional)"
                    hint="E.g. To participate subscribe to our channel."
                    rows="4"
                  />
                  <BaseImageUploader v-model="giveaway.prize.imageBase64" @success="getImageCropped" />
                  <v-img v-if="preview != null" :src="preview" />
                  <BaseComboBox
                    v-model="giveaway.participantCustomFields"
                    :items="exampleCustomFields"
                    label="Participant custom fields"
                  />
                  <v-row no-gutters align="center" justify="space-around">
                    <v-col cols="12" md="5"> <BaseDatePicker v-model="giveaway.date" /> </v-col>
                    <v-col cols="12" md="5"> <BaseTimePicker v-model="giveaway.time" /> </v-col>
                  </v-row>

                  <v-expansion-panels>
                    <v-expansion-panel>
                      <v-expansion-panel-header>More Options</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <BaseTextField label="Number of winners" type="number" min="1" />
                        <BaseComboBox
                          v-model="giveaway.countries"
                          label="Allowed countries (optional)"
                          :items="countries"
                          item-text="name"
                          item-value="countryId"
                        />
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>

                  <BaseButton class="mb-5" block x-large color="success" :loading="loading">Preview & Save</BaseButton>
                </BaseForm>
              </v-col>
            </v-row>
          </v-container>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  BaseCard,
  BaseForm,
  BaseTextField,
  BaseTextarea,
  BaseButton,
  BaseDatePicker,
  BaseTimePicker,
  BaseComboBox,
  BaseImageUploader
} from '../baseComponents'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
// import axios from 'axios'
// import { authHeader } from '../../helpers/authHeader'
export default {
  name: 'GiveawaySetupForm',
  components: {
    BaseCard,
    BaseForm,
    BaseTextField,
    BaseTextarea,
    BaseButton,
    BaseDatePicker,
    BaseTimePicker,
    BaseComboBox,
    BaseImageUploader
  },
  mixins: [validationMixin],
  validations: {
    email: { required },
    password: { required }
  },
  data() {
    return {
      preview: null,
      loading: false,
      giveaway: {
        id: this.$store.state.giveaway.giveawayId,
        name: '',
        date: new Date().toISOString().substr(0, 10),
        time: `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}`,
        prize: {
          name: '',
          description: '',
          numberOfWinners: '',
          imageBase64: null, // the datebase64 url of created image
          imageName: ''
        },
        participantCustomFields: ['Name', 'Email']
      },
      exampleCustomFields: [
        { header: 'Select or create a custom field:' },
        'Instagram account',
        'Facebook account',
        'Twitter account',
        'Age',
        'Phone',
        'Address'
      ]
    }
  },
  methods: {
    getImageCropped(image) {
      this.preview = image
    }
  }
}
</script>
