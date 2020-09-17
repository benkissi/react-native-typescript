class ChildModel {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string;
  delegated: boolean;
  grade: string;
  image: string


  constructor(
    id: string,
    fName: string,
    lName: string,
    mName: string = '',
    delegatedStatus: boolean = false,
    grade: string,
    image: string
  ) {
    this.firstName = fName;
    this.lastName = lName;
    this.middleName = mName;
    this.delegated = delegatedStatus;
    this.id = id
    this.grade = grade
    this.image = image
  }

  getFullName() {
    if (this.middleName) {
      return `${this.firstName} ${this.middleName} ${this.lastName} `;
    }
    return `${this.firstName} ${this.lastName} `;
  }
}

export default ChildModel;
