import fs from "fs";

export class Contact {
  private jsonContact: object;

  constructor(jsonContact: object) {
    this.jsonContact = jsonContact;
  }

  setJsonContact(jsonContact: object): void {
    this.jsonContact = jsonContact;
  }

  getJsonContact(): object {
    return this.jsonContact;
  }

  saveToFile(filename: string): void {
    const jsonString = JSON.stringify(this.jsonContact, null, 2);
    fs.writeFileSync(filename, jsonString);
  }

  static loadFromFile(filename: string): Contact {
    const jsonString = fs.readFileSync(filename, "utf-8");
    const jsonContact = JSON.parse(jsonString);
    return new Contact(jsonContact);
  }
}
