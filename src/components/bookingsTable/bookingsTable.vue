<template>
      <table
        class="bookings-table__body__wrapper__content"
        v-if="bookings.length > 0">
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Duration</th>
        </tr>
        <tr v-for="item in bookings" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.date}}</td>
          <td>{{item.duration}}</td>
        </tr>
      </table>
</template>
<script src="./bookingsTable.js"></script>
<style src="./bookingsTable.scss" lang="scss"></style>
