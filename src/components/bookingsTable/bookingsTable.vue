<template>
      <table
        class="bookings-table__body__wrapper__content"
        v-if="bookings.length > 0">
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Duration</th>
          <th></th>
        </tr>
        <tr v-for="item in bookings" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.date}}</td>
          <td>{{item.duration}}</td>
          <td><g-button @click="cancelBooking(item.name)" class="bookings-table__row__button"> Cancel </g-button></td>
        </tr>
      </table>
</template>
<script src="./bookingsTable.js"></script>
<style src="./bookingsTable.scss" lang="scss"></style>
