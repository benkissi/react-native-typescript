import { sampleChildren } from './data'
import {tagDelegationStatus} from './funcs'

import {Child} from './types'


const fetchChildren: (id: string) => Promise<Child[]> = (userId) => {
  return new Promise((resolve, reject) => {
    const filteredChildren = sampleChildren.filter((child) => {
     return child.parents.includes(userId) || child.guardians.includes(userId)
    })

    const delegatedSet = tagDelegationStatus(filteredChildren, userId)
    setTimeout(() => {
      resolve(delegatedSet)
    }, 1000)
  })
}

export {fetchChildren}