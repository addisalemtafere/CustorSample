export class Customer {
  public customerId: number;
  public firstName: string;
  public middleName: string;
  public lastName: string;
  public sex: string;
  public country: string;
  public region: string;
  public zone: string;
  public wereda: string;
  public kebele: string;
  public houseNo: string;
  public mobileNo: string;
  public birthDate: string;
  public email: string;


  constructor(firstName: string, middleName: string, lastName: string, sex: string, country: string, region: string, zone: string, wereda: string, kebele: string, houseNo: string, mobileNo: string, birthDate: string, email: string) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.sex = sex;
    this.country = country;
    this.region = region;
    this.zone = zone;
    this.wereda = wereda;
    this.kebele = kebele;
    this.houseNo = houseNo;
    this.mobileNo = mobileNo;
    this.birthDate = birthDate;
    this.email = email;
  }
}
