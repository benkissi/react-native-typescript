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

interface Interface_ScheduleItem {
  title: string;
  time: string;
  subjectId: string;
  ongoing: boolean;
}

interface Schedule {
  title: string
  data: Interface_ScheduleItem[]
}



export type {Child, Schedule, Interface_ScheduleItem}