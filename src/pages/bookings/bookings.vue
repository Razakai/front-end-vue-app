<template>
  <main class="p-bookings">
    <section class="p-bookings__header">
      <div class="p-bookings__header__left">
      <select name="filterBy" v-model="multiselect">
        <option value="bookingDate">Booking date</option>
        <option value="name">Club name</option>
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
    <section class="p-bookings__table-wrapper">
      <bookings-table
        :bookings="getbookings"
        :is-appointments="showAppointments"/>
    </section>
  </main>
</template>
<script src="./bookings.js"></script>
<style src="./bookings.scss" lang="scss"></style>
