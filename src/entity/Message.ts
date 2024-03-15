import * as fs from 'fs';

interface MessageData {
  mensagem: string;
}

export class Message {
  private jsonMessage: MessageData;

  constructor(jsonMessage: MessageData) {
    this.jsonMessage = jsonMessage;
  }

  setJsonMessage(jsonMessage: MessageData): void {
    this.jsonMessage = jsonMessage;
  }

  getJsonMessage(): MessageData {
    return this.jsonMessage;
  }

  saveToFile(filename: string): void {
    const jsonString = JSON.stringify(this.jsonMessage, null, 2);
    fs.writeFileSync(filename, jsonString);
  }

  static loadFromFile(filename: string): Message {
    const jsonString = fs.readFileSync(filename, 'utf-8');
    const jsonMessage = JSON.parse(jsonString);
    return new Message(jsonMessage);
  }
}
