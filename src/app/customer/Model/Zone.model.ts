
export class ZoneModel {
  public id: number;
  public code: string;
  public description: string;
  public amDescription: string;
  public parent: string;
  public siteCode: string;
  public tigrigna: string;
  public afanOromo: string;
  public afar: string;
  public somali: string;

  constructor(id: number, code: string, description: string, parent: string) {
    this.id = id;
    this.code = code;
    this.description = description;
    this.parent = parent;
  }
}
