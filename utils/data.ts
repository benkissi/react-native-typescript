import {Child, Schedule} from './types';

const sampleChildren: Child[] = [
  {
    id: '123!@#',
    parents: ['123'],
    guardians: ['34j'],
    firstName: 'Jason',
    lastName: 'Debra',
    middleName: 'Kissi',
    grade: 'Grade 4',
    image: "https://drive.google.com/uc?export=view&id=1A6vvLs-Rz9xg1wQo87l9glCanH_U2agk"
  },
  {
    id: '1230*&',
    parents: ['34j'],
    guardians: ['123'],
    firstName: 'Ananse',
    lastName: '',
    middleName: 'Spider',
    grade: 'Grade 4',
    image: "https://drive.google.com/uc?export=view&id=1A6vvLs-Rz9xg1wQo87l9glCanH_U2agk"
  },
  {
    id: '1230((',
    parents: ['34j'],
    guardians: ['123'],
    firstName: 'Kumerica',
    lastName: '',
    middleName: 'Geng',
    grade: 'Grade 4',
    image: "https://drive.google.com/uc?export=view&id=1A6vvLs-Rz9xg1wQo87l9glCanH_U2agk"
  },
  {
    id: '1230(',
    parents: ['34j'],
    guardians: ['123'],
    firstName: 'Tom',
    lastName: 'Clansey',
    middleName: 'Splinter',
    grade: 'Grade 4',
    image: "https://drive.google.com/uc?export=view&id=1A6vvLs-Rz9xg1wQo87l9glCanH_U2agk"
  },
  {
    id: '983$%',
    parents: ['939393'],
    guardians: [],
    firstName: 'Jane',
    lastName: 'Foster',
    middleName: '',
    grade: 'Grade 4',
    image: "https://drive.google.com/uc?export=view&id=1A6vvLs-Rz9xg1wQo87l9glCanH_U2agk"
  },
];

const detailOptions = [
  {
    id: '01',
    title: "Child's details",
    description: "View and update your child's details",
  },
  {
    id: '02',
    title: 'Lesson schedule',
    description: "Share a feature you will like to use in smartsapp"
  },
  {
    id: '03',
    title: 'Absent & lateness request',
    description: "Inform school of your childs absence"
  },
  {
    id: '04',
    title: 'SmartSapp pay',
    description: "Pay fees and view transactions for your child"
  },
  {
    id: '05',
    title: 'Academic report',
    description: "Pay fees and view transactions for your child"
  },

];

const sampleSchedules: Schedule[]  = [
  {
    title: '2020-09-10',
    data: [
      {
        title: 'English language',
        time: '8:00am - 10:00am',
        subjectId: '01',
        ongoing: false,
      },
      {
        title: 'Lunch break',
        time: '12:00pm - 1:00pm',
        subjectId: '03',
        ongoing: true,
      },
    ],
  },
  {
    title: '2020-09-11',
    data: [
      {
        title: 'French',
        time: '10:00am - 12:00pm',
        subjectId: '02',
        ongoing: false,
      },
      {
        title: 'Lunch break',
        time: '12:00pm - 1:00pm',
        subjectId: '03',
        ongoing: false,
      },
    ],
  },
];

export {sampleChildren, detailOptions, sampleSchedules};
