// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// plugin per la formattazione della data
dayjs.extend(dayjs_plugin_customParseFormat)
function currentDate(){
  return dayjs(new Date()).format('DD/MM/YYYY HH:mm:ss')
}
// vue
const app = new Vue({
    el: '#app',
    data:{
      // variabili di appoggio
      selected: 0,
      newMessage:'',
      searchContact:'',
      //oggetto
      user:{
        name:'Sofia',
        avatar: '_io'
      },
      // array di oggetti (contacts)
      contacts: [
        {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          // array di oggetti (messages)
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              text: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              text: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              text: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              text: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'received'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              text: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              text: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              text: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luisa',
          avatar: '_6',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              text: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              text: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
      ]
    },
    computed: {
      filteredContacts(){
        if(this.searchContact === ''){
          return this.contacts
        } else {
          return this.contacts.filter(contact=>contact.name.toLowerCase().includes(this.searchContact.toLowerCase()))
        }
      },
      // funzione per prendere il contatto selezionato al momento
      selectedContact(){
        return this.filteredContacts[this.selected]
      }

    },
    methods: {
      
      // funzione che calcola classe css per messaggio passato
      classForMessage(message){
        if(message.status==='received'){
          return "chat align-self-start bg-white"
        } else if(message.status==='sent'){
          return "chat align-self-end bg-green"
        }
        return ''
      },
      // funzione per inviare un nuovo messaggio all'enter
      addMessage(){
        if(this.newMessage!== ''){
          this.selectedContact.messages.push({date:currentDate(), text:this.newMessage,status:'sent'})
          this.newMessage=''
          setTimeout(()=>{
            this.selectedContact.messages.push({date:currentDate(), text:'ok',status:'received'})
          },1000)
        }
      },
    },
})