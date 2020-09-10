interface Child {
  id: string;
  parents: string [];
  guardians: string [];
  firstName: string;
  lastName: string;
  middleName?: string;
  grade: string;
  delegated?: boolean
  image: string
}

export type {Child}