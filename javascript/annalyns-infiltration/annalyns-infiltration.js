/**
 * The fast attack is available when the knight is sleeping
 *
 * @param {boolean} knightIsAwake
 *
 * @return {boolean} Whether or not you can execute a fast attack.
 */
export function canExecuteFastAttack(knightIsAwake) {
  if(knightIsAwake === true) {
    return false;
  } else {
    return true;
  }
}

/**
 * A useful spy captures information, which they can't do if everyone's asleep.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can spy on someone.
 */
export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if(knightIsAwake === true || archerIsAwake === true || prisonerIsAwake === true) {
    return true;
  } else {
    return false;
  }
}

/**
 * You'll get caught by the archer if you signal while they're awake.
 *
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 *
 * @returns {boolean} Whether or not you can send a signal to the prisoner.
 */
export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if(archerIsAwake === false && prisonerIsAwake === true ) {
    return true;
  } else {
    return false;
  }
}

/**
 * The final stage in the plan: freeing Annalyn's best friend.
 *
 * @param {boolean} knightIsAwake
 * @param {boolean} archerIsAwake
 * @param {boolean} prisonerIsAwake
 * @param {boolean} petDogIsPresent
 *
 * @returns {boolean} Whether or not you can free Annalyn's friend.
 */
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if(petDogIsPresent === true) {
    if(archerIsAwake === false) {
      return true;
    } else {
      return false;
    }
  } else {
    if(prisonerIsAwake === false) {
      return false;
    } else {
      if(knightIsAwake === false && archerIsAwake === false) {
        return true;
      } else {
        return false;
      }
    }
  }
}
