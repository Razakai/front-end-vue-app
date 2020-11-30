<template>
  <main class="p-bookings">
    <section class="p-bookings__header">
      <div class="p-bookings__header__left">
      <select name="filterBy" v-model="multiselect">
        <option value="date">Date</option>
      </select>
      <TextInput v-model="searchTerm" placeholder="search term"/>
      </div>
      <div class="p-bookings__header__right">
        <div class="p-bookings__header__right__checkbox">
          <input type="checkbox" id="showAppointments" v-model="showAppointments">
          <label for="showAppointments">Show Appointments</label>
        </div>
      </div>
    </section>
    <section class="p-bookings__body">
      <bookings-table
        :bookings="getItems"
        :is-appointments="showAppointments"/>
    </section>
  </main>
</template>
<script src="./bookings.js"></script>
<style src="./bookings.scss" lang="scss"></style>
