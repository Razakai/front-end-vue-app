<template>
  <main class="p-training-plan">
    <section class="training-plan-wrapper">
      <div class="training-plan__bmr">
        <span class="training-plan__text">BMR: {{ currentBMR }}</span>
      </div>
      <div class="training-plan__calories">
        <span class="training-plan__text">Calories burnt today: {{ currentCalories }}</span>
      </div>
      <div class="training-plan__meal-plan">
        <div class="training-plan__meal-plan__item-container">
          <label>Breakfast</label>
        <select class="training-plan__meal-plan__select__override" name="breakfast" v-model="breakfastCalories">
          <option v-for="item in getBreakfast" :key="item.name" :value="item.calories">{{ item.name }}</option>
        </select>
        </div>
        <div class="training-plan__meal-plan__item-container">
          <label>Lunch</label>
        <select class="training-plan__meal-plan__select__override" name="lunch" v-model="lunchCalories">
          <option v-for="item in getLunch" :key="item.name" :value="item.calories">{{ item.name }}</option>
        </select>
        </div>
        <div class="training-plan__meal-plan__item-container">
          <label>Dinner</label>
        <select class="training-plan__meal-plan__select__override" name="dinner" v-model="dinnerCalories">
          <option v-for="item in getDinner" :key="item.name" :value="item.calories">{{ item.name }}</option>
        </select>
        </div>
      </div>
      <div class="training-plan__calorie-intake">
       Calorie count today: {{ totalCalorieIntake }}
      </div>
      <div>
        <a href="#"
           onclick="
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href),
              'facebook-share-dialog',
              'width=626,height=436');
            return false;">
          Share on Facebook
        </a>
      </div>
    </section>
  </main>
</template>
<script src="./trainingPlan.js"></script>
<style src="./trainingPlan.scss" lang="scss"></style>
