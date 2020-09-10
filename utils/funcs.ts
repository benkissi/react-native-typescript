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

  console.log('**************updated', updated)

  return updated
}

export {tagDelegationStatus}