/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import { CaloriesCounter } from '../caloriesCounter.js'

const testPersonMale = new CaloriesCounter(180, 100, 38, 'male', 1.2)
const testPersonFemale = new CaloriesCounter(152, 52, 28, 'female', 1.75)

describe('test right input', () => {
  it('Weight', () => {
    expect(testPersonMale.getWeight()).toEqual(100)
  })
  it('Height', () => {
    expect(testPersonMale.getHeight()).toEqual(180)
  })
  it('Age', () => {
    expect(testPersonMale.getAge()).toEqual(38)
  })
  it('Sex', () => {
    expect(testPersonMale.getSex()).toEqual('male')
    expect(testPersonFemale.getSex()).toEqual('female')
  })
  it('Activitly Level', () => {
    expect(testPersonMale.getActivityLevel()).toEqual(1.2)
  })
  it('calculate BMR', () => {
    expect(testPersonMale.getBasalMetabolicRate()).toEqual(1940)
    expect(testPersonFemale.getBasalMetabolicRate()).toEqual(1169)
  })
  it('maintenanceCalories', () => {
    expect(testPersonMale.getActiveMetabolicRate()).toEqual(2328)
  })
  it('exerciseCalories', () => {
    expect(testPersonMale.burnedCaloriesBadminton(60)).toEqual(577.5)
    expect(testPersonMale.burnedCaloriesBasketball(60)).toEqual(682.5)
    expect(testPersonMale.burnedCaloriesBeachVolleyball(60)).toEqual(840)
    expect(testPersonMale.burnedCaloriesGolf(60)).toEqual(504)
    expect(testPersonMale.burnedCaloriesHandball(60)).toEqual(1260)
    expect(testPersonMale.burnedCaloriesIcehockey(60)).toEqual(840)
    expect(testPersonMale.burnedCaloriesRollerblading(60)).toEqual(1029.0000000000002)
    expect(testPersonMale.burnedCaloriesRunning(60)).toEqual(1050)
    expect(testPersonMale.burnedCaloriesSoccer(60)).toEqual(735)
    expect(testPersonMale.burnedCaloriesSwimming(60)).toEqual(630)
    expect(testPersonMale.burnedCaloriesTennis(60)).toEqual(766.5)
    expect(testPersonMale.burnedCaloriesWalking(60)).toEqual(367.5)
    expect(testPersonMale.burnedCaloriesWeightTraining(60)).toEqual(630)
  })
})

describe('test wrong input', () => {
  it('Weight', () => {
    expect(() => new CaloriesCounter(180, -100, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounter(180, 1000, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounter(180, '100', 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounter(180, null, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounter(180, true, 38, 'male', 1.2).toThrowError('Invalid Weight'))
    expect(() => new CaloriesCounter(180, undefined, 38, 'male', 1.2).toThrowError('Invalid Weight'))
  })
  it('Height', () => {
    expect(() => new CaloriesCounter(-180, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounter(1800, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounter('180', 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounter(null, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounter(true, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
    expect(() => new CaloriesCounter(undefined, 100, 38, 'male', 1.2).toThrowError('Invalid Height'))
  })
  it('Age', () => {
    expect(() => new CaloriesCounter(180, 100, -38, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounter(180, 100, 380, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounter(180, 100, '38', 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounter(180, 100, null, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounter(180, 100, true, 'male', 1.2).toThrowError('Invalid Age'))
    expect(() => new CaloriesCounter(180, 100, undefined, 'male', 1.2).toThrowError('Invalid Age'))
  })
  it('Sex', () => {
    expect(() => new CaloriesCounter(180, 100, 38, -100, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounter(180, 100, 38, 100, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounter(180, 100, 38, 'male ', 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounter(180, 100, 38, null, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounter(180, 100, 38, true, 1.2).toThrowError('Invalid Sex'))
    expect(() => new CaloriesCounter(180, 100, 38, undefined, 1.2).toThrowError('Invalid Sex'))
  })
  it('Activitly Level', () => {
    expect(() => new CaloriesCounter(180, 100, 38, 'male', -1.2).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounter(180, 100, 38, 'male', 1.20).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounter(180, 100, 38, 'male', '1.2').toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounter(180, 100, 38, 'male', null).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounter(180, 100, 38, 'male', true).toThrowError('Invalid Activitly Level'))
    expect(() => new CaloriesCounter(180, 100, 38, 'male', undefined).toThrowError('Invalid Activitly Level'))
  })
  it('exerciseCalories', () => {
    expect(() => testPersonMale.burnedCaloriesBadminton(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBadminton(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBadminton('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBadminton(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBadminton(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBadminton(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesBasketball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBasketball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBasketball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBasketball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBasketball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBasketball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesBeachVolleyball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBeachVolleyball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBeachVolleyball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBeachVolleyball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBeachVolleyball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesBeachVolleyball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesGolf(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesGolf(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesGolf('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesGolf(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesGolf(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesGolf(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesHandball(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesHandball(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesHandball('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesHandball(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesHandball(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesHandball(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesIcehockey(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesIcehockey(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesIcehockey('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesIcehockey(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesIcehockey(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesIcehockey(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesRollerblading(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRollerblading(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRollerblading('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRollerblading(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRollerblading(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRollerblading(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesRunning(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRunning(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRunning('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRunning(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRunning(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesRunning(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesSoccer(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSoccer(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSoccer('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSoccer(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSoccer(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSoccer(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesSwimming(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSwimming(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSwimming('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSwimming(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSwimming(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesSwimming(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesTennis(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesTennis(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesTennis('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesTennis(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesTennis(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesTennis(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesWalking(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWalking(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWalking('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWalking(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWalking(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWalking(undefined)).toThrowError('Invalid Time')

    expect(() => testPersonMale.burnedCaloriesWeightTraining(-60)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWeightTraining(5000)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWeightTraining('60')).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWeightTraining(null)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWeightTraining(true)).toThrowError('Invalid Time')
    expect(() => testPersonMale.burnedCaloriesWeightTraining(undefined)).toThrowError('Invalid Time')
  })
})
