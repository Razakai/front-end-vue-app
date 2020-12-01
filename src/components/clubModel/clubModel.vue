<template>
  <section class="club-model  animate">
    <div class="club-model__content">
      <div class="club-model__content__header">
        <span><h2>{{ modelName }}</h2></span>
        <span @click="closeModel" class="club-model__content__close-btn">x</span>
      </div>
      <div class="club-model__content__fields">
        <div>
          <div class="club-model__content__fields__labels">
            <label>Name</label>
            <label>Max Size</label>
          </div>
          <div class="club-model__content__fields__input">
            <TextInput class="club-model__content__fields__input__override" v-model="name" :placeholder="'Club Name'"></TextInput>
            <TextInput class="club-model__content__fields__input__override" v-model="maxsize" :placeholder="'Max Size'"></TextInput>
          </div>
        </div>
        <div>
          <div class="club-model__content__fields__labels">
            <label>Facility</label>
            <label>Trainer</label>
          </div>
          <div class="club-model__content__fields__input">
            <select class="club-model__content__fields__select__override" name="facilitySelect" v-model="facility">
              <option v-for="item in getFacilities" :key="item" :value="item">{{ item }}</option>
            </select>
            <TextInput class="club-model__content__fields__input__override" v-model="trainer" :placeholder="'Trainer'"></TextInput>
          </div>
        </div>
        <div>
          <div class="club-model__content__fields__labels">
            <label>Duration</label>
            <label>Calories</label>
          </div>
          <div class="club-model__content__fields__input">
            <TextInput class="club-model__content__fields__input__override" v-model="duration" :placeholder="'Duration'"></TextInput>
            <TextInput class="club-model__content__fields__input__override" v-model="calories" :placeholder="'Calories'"></TextInput>
          </div>
        </div>
        <div>
          <div class="club-model__content__fields__triple-item">
            <div>
              <div>
                <label>Club Photo</label>
              </div>
              <div>
                <TextInput class="club-model__content__fields__input__override" v-model="photoUrl" :placeholder="'Club Photo'"></TextInput>
              </div>
            </div>
            <div>
              <div>
                <label>Date</label>
              </div>
              <div>
                <TextInput class="club-model__content__fields__input__override" v-model="date" :input-type="'date'" :placeholder="'Date'"></TextInput>
              </div>
            </div>
            <div>
              <div>
                <label>Time</label>
              </div>
              <div>
                <TextInput class="club-model__content__fields__input__override" v-model="time" :input-type="'time'" :placeholder="'Date'"></TextInput>
              </div>
            </div>
          </div>
          <div class="club-model__content__btn">
            <g-button>Create</g-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./clubModel.js"></script>
<style src="./clubModel.scss" lang="scss"></style>
