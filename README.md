# calories-counter

A module that can calculate the Basal Metabolic Rate (BMR) and the Active Metabolic Rate (AMR) needed depending on a persons lenght, height, age, sex and activity level. It also have methods for calculate calories burned during different exercises, the result is depending of how long the time it takes to complete the exercise and the weight of the person doing the exercise.

# Install
```bash
npm install @dc222bz/calories-counter
```

# Usage

```js
import { CaloriesCounter } from '@dc222bz/calories-counter/caloriesCounter.js'

// height, weight, age, sex, and activity level as inputs.
const person = new CaloriesCounter(185, 79, 31, 'male', 1.4) 

// The Basal Metabolic Rate is calculated using the Mifflin-St Jeor formula.
const basalmetabolicrate = person.getBasalMetaBolicRate()

// The Active Metabolic Rate is calculated using - Basal Metabolic Rate * activity level
const ActiveMetabolicRate = person.getActiveMetabolicRate()

// The formula used to calculate burned calories from exercises are - time * (mets * 3.5 * weight) / 200. 
// source: https://www.exercise4weightloss.com/calories-burned-during-exercise.html
/* Metabolic Equivalent of a Task (met) – measures how many times more energy an activity burns
   in comparison to sitting still for the same period of time (met = 1). */
// time as input.
const caloriesBurned = person.burnedCaloriesRunning(45)
```

# Contributing

-[Daniel Carlsson](https://github.com/dc222bz)

# License
MIT
