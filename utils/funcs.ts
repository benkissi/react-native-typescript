import {Child} from './types'

const tagDelegationStatus = (children: Child[], id: string) : Child[] => {
  let updated: Child[] = []
  updated = children.map((child) => {
    if (child.parents.includes(id)) {
      child.delegated = false
    } else if (child.guardians.includes(id)) {
      child.delegated = true
    }
    return child
  })

  return updated
}

function getFutureDates(days: number) {
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + (864e5 * index)); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(days: number) {
  return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

export {tagDelegationStatus, getFutureDates, getPastDate}