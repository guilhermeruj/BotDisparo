import { create, Whatsapp } from "venom-bot";
import { Message } from "./entity/Message";
import { Contact } from "./entity/Contact";

const filePathMessage = "./build/json/messagem.json";
const filePathContact = "./build/json/contact.json";

class Bot {
  public static async triggerMessage(client: Whatsapp) {
    let loadedMessage = Message.loadFromFile(filePathMessage);
    let loadedContact = Contact.loadFromFile(filePathContact);

    if (!loadedMessage || !loadedContact) {
      console.error("O arquivo mensagem.json ou contact.json não foi encontrado.");
      return;
    }

    try {
      const contacts = loadedContact.getJsonContact();
      for (const contactName in contacts) {
        if (Object.prototype.hasOwnProperty.call(contacts, contactName)) {
          const phoneNumber = contacts[contactName];
          const result = await client.sendText(`55${phoneNumber}@c.us`, loadedMessage.getJsonMessage().mensagem);
          console.log("Result: ", result);
    
          // Altere o tempo como for nescessario se tiver dando muito bloqueio vai aumentando.
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
      return "Mensagem enviada com sucesso!";
    }  catch (error) {
      console.error("Erro ao enviar: ", error);
      return error;
    }
  }
}

// Adicionei uma função wrapper para capturar e tratar os erros de criação do cliente
async function startBot() {
  try {
    const client = await create( {session: 'Disparo'});
    await Bot.triggerMessage(client);
  } catch (error) {
    console.error("Erro ao iniciar o bot:", error);
  }
}

startBot();
