import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryRestaurantService implements InMemoryDbService {
  createDb() {
    const tables = [
      {
        'id': 1,
        'minutes': 0,
        'customers_total': 3,
        'color': 'white',
        'posX': '55px',
        'posY': '105px',
        'width': 0,
        'length': 0
      },
      {
        'id': 2,
        'minutes': 0,
        'customers_total': 4,
        'color': 'white',
        'posX': '305px',
        'posY': '105px',
        'width': 0,
        'length': 0
      },
      {
        'id': 3,
        'minutes': 0,
        'customers_total': 2,
        'color': 'white',
        'posX': '555px',
        'posY': '105px',
        'width': 0,
        'length': 0
      },
      {
        'id': 4,
        'minutes': 0,
        'customers_total': 4,
        'color': 'white',
        'posX': '805px',
        'posY': '105px',
        'width': 0,
        'length': 0
      },
      {
        'id': 5,
        'minutes': 0,
        'customers_total': 4,
        'color': 'white',
        'posX': '1055px',
        'posY': '105px',
        'width': 0,
        'length': 0
      },
      {
        'id': 6,
        'minutes': 0,
        'customers_total': 4,
        'color': 'white',
        'posX': '55px',
        'posY': '280px',
        'width': 0,
        'length': 0
      },
      {
        'id': 7,
        'minutes': 0,
        'customers_total': 2,
        'color': 'white',
        'posX': '305px',
        'posY': '280px',
        'width': 0,
        'length': 0
      },
      {
        'id': 8,
        'minutes': 0,
        'customers_total': 4,
        'color': 'white',
        'posX': '555px',
        'posY': '280px',
        'width': 0,
        'length': 0
      },
      {
        'id': 9,
        'minutes': 0,
        'customers_total': 4,
        'color': 'white',
        'posX': '805px',
        'posY': '280px',
        'width': 0,
        'length': 0
      },
      {
        'id': 10,
        'minutes': 0,
        'customers_total': 3,
        'color': 'white',
        'posX': '1055px',
        'posY': '280px',
        'width': 0,
        'length': 0
      },
      {
        'id': 11,
        'minutes': 0,
        'customers_total': 4,
        'color': 'white',
        'posX': '55px',
        'posY': '455px',
        'width': 0,
        'length': 0
      },
      {
        'id': 12,
        'minutes': 0,
        'customers_total': 2,
        'color': 'white',
        'posX': '305px',
        'posY': '455px',
        'width': 0,
        'length': 0
      },
      {
        'id': 13,
        'minutes': 0,
        'customers_total': 3,
        'color': 'white',
        'posX': '555px',
        'posY': '455px',
        'width': 0,
        'length': 0
      },
      {
        'id': 14,
        'minutes': 0,
        'customers_total': 4,
        'color': 'white',
        'posX': '805px',
        'posY': '455px',
        'width': 0,
        'length': 0
      },
      {
        'id': 15,
        'minutes': 0,
        'customers_total': 2,
        'color': 'white',
        'posX': '1055px',
        'posY': '455px',
        'width': 0,
        'length': 0
      }
    ];
    const orders = [
      {
        'id': 0,
        'first_name': 'Jordain',
        'last_name': 'Froment',
        'customer_id': 0,
        'table': 1,
        'type': 'Starter',
        'dishname': 'Vitello Tonato',
        'dish_desc': 'Vitello tonato met ’n frisse toets'
      },
      {
        'id': 1,
        'first_name': 'Jordain',
        'last_name': 'Froment',
        'customer_id': 0,
        'table': 1,
        'type': 'Main',
        'dishname': 'Kalfsschnitzel met Citroen',
        'dish_desc': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
      },
      {
        'id': 2,
        'first_name': 'Jordain',
        'last_name': 'Froment',
        'customer_id': 0,
        'table': 1,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 3,
        'first_name': 'Holly',
        'last_name': 'Serridge',
        'customer_id': 1,
        'table': 1,
        'type': 'Starter',
        'dishname': 'Melanzane alla Parmigiana',
        'dish_desc': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
      },
      {
        'id': 4,
        'first_name': 'Holly',
        'last_name': 'Serridge',
        'customer_id': 1,
        'table': 1,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 5,
        'first_name': 'Holly',
        'last_name': 'Serridge',
        'customer_id': 1,
        'table': 1,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 6,
        'first_name': 'Idelle',
        'last_name': 'Maffione',
        'customer_id': 2,
        'table': 1,
        'type': 'Starter',
        'dishname': 'Orecchiette met Tonijn',
        'dish_desc': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
      },
      {
        'id': 7,
        'first_name': 'Idelle',
        'last_name': 'Maffione',
        'customer_id': 2,
        'table': 1,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 8,
        'first_name': 'Idelle',
        'last_name': 'Maffione',
        'customer_id': 2,
        'table': 1,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 9,
        'first_name': 'Tanny',
        'last_name': 'McCathy',
        'customer_id': 3,
        'table': 2,
        'type': 'Starter',
        'dishname': 'Kroketjes van Oud Brugge Kaas',
        'dish_desc': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
      },
      {
        'id': 10,
        'first_name': 'Tanny',
        'last_name': 'McCathy',
        'customer_id': 3,
        'table': 2,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 11,
        'first_name': 'Tanny',
        'last_name': 'McCathy',
        'customer_id': 3,
        'table': 2,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 12,
        'first_name': 'Andy',
        'last_name': 'Grattan',
        'customer_id': 4,
        'table': 2,
        'type': 'Starter',
        'dishname': 'Garnaalkroketten',
        'dish_desc': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
      },
      {
        'id': 13,
        'first_name': 'Andy',
        'last_name': 'Grattan',
        'customer_id': 4,
        'table': 2,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 14,
        'first_name': 'Andy',
        'last_name': 'Grattan',
        'customer_id': 4,
        'table': 2,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 15,
        'first_name': 'Cleve',
        'last_name': 'Abisetti',
        'customer_id': 5,
        'table': 2,
        'type': 'Starter',
        'dishname': 'Rundscarpaccio met mascarponecrème',
        'dish_desc': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
      },
      {
        'id': 16,
        'first_name': 'Cleve',
        'last_name': 'Abisetti',
        'customer_id': 5,
        'table': 2,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 17,
        'first_name': 'Cleve',
        'last_name': 'Abisetti',
        'customer_id': 5,
        'table': 2,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 18,
        'first_name': 'Barbabra',
        'last_name': 'Houson',
        'customer_id': 6,
        'table': 2,
        'type': 'Starter',
        'dishname': 'Dagverse soep',
        'dish_desc': 'Dagverse soep | gegratineerde toast'
      },
      {
        'id': 19,
        'first_name': 'Barbabra',
        'last_name': 'Houson',
        'customer_id': 6,
        'table': 2,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 20,
        'first_name': 'Barbabra',
        'last_name': 'Houson',
        'customer_id': 6,
        'table': 2,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 21,
        'first_name': 'Mill',
        'last_name': 'Oldcote',
        'customer_id': 7,
        'table': 3,
        'type': 'Starter',
        'dishname': 'Vitello Tonato',
        'dish_desc': 'Vitello tonato met ’n frisse toets'
      },
      {
        'id': 22,
        'first_name': 'Mill',
        'last_name': 'Oldcote',
        'customer_id': 7,
        'table': 3,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 23,
        'first_name': 'Mill',
        'last_name': 'Oldcote',
        'customer_id': 7,
        'table': 3,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 24,
        'first_name': 'Lydia',
        'last_name': 'Lightbourne',
        'customer_id': 8,
        'table': 3,
        'type': 'Starter',
        'dishname': 'Melanzane alla Parmigiana',
        'dish_desc': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
      },
      {
        'id': 25,
        'first_name': 'Lydia',
        'last_name': 'Lightbourne',
        'customer_id': 8,
        'table': 3,
        'type': 'Main',
        'dishname': 'Kalfsschnitzel met Citroen',
        'dish_desc': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
      },
      {
        'id': 26,
        'first_name': 'Lydia',
        'last_name': 'Lightbourne',
        'customer_id': 8,
        'table': 3,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 27,
        'first_name': 'Mark',
        'last_name': 'Bothams',
        'customer_id': 9,
        'table': 4,
        'type': 'Starter',
        'dishname': 'Orecchiette met Tonijn',
        'dish_desc': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
      },
      {
        'id': 28,
        'first_name': 'Mark',
        'last_name': 'Bothams',
        'customer_id': 9,
        'table': 4,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 29,
        'first_name': 'Mark',
        'last_name': 'Bothams',
        'customer_id': 9,
        'table': 4,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 30,
        'first_name': 'Miltie',
        'last_name': 'Deeth',
        'customer_id': 10,
        'table': 4,
        'type': 'Starter',
        'dishname': 'Kroketjes van Oud Brugge Kaas',
        'dish_desc': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
      },
      {
        'id': 31,
        'first_name': 'Miltie',
        'last_name': 'Deeth',
        'customer_id': 10,
        'table': 4,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 32,
        'first_name': 'Miltie',
        'last_name': 'Deeth',
        'customer_id': 10,
        'table': 4,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 33,
        'first_name': 'Linea',
        'last_name': 'Dregan',
        'customer_id': 11,
        'table': 4,
        'type': 'Starter',
        'dishname': 'Garnaalkroketten',
        'dish_desc': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
      },
      {
        'id': 34,
        'first_name': 'Linea',
        'last_name': 'Dregan',
        'customer_id': 11,
        'table': 4,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 35,
        'first_name': 'Linea',
        'last_name': 'Dregan',
        'customer_id': 11,
        'table': 4,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 36,
        'first_name': 'Pierce',
        'last_name': 'McElwee',
        'customer_id': 12,
        'table': 4,
        'type': 'Starter',
        'dishname': 'Rundscarpaccio met mascarponecrème',
        'dish_desc': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
      },
      {
        'id': 37,
        'first_name': 'Pierce',
        'last_name': 'McElwee',
        'customer_id': 12,
        'table': 4,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 38,
        'first_name': 'Pierce',
        'last_name': 'McElwee',
        'customer_id': 12,
        'table': 4,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 39,
        'first_name': 'Doria',
        'last_name': 'Randalson',
        'customer_id': 13,
        'table': 5,
        'type': 'Starter',
        'dishname': 'Dagverse soep',
        'dish_desc': 'Dagverse soep | gegratineerde toast'
      },
      {
        'id': 40,
        'first_name': 'Doria',
        'last_name': 'Randalson',
        'customer_id': 13,
        'table': 5,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 41,
        'first_name': 'Doria',
        'last_name': 'Randalson',
        'customer_id': 13,
        'table': 5,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 42,
        'first_name': 'Letti',
        'last_name': 'Tewkesberrie',
        'customer_id': 14,
        'table': 5,
        'type': 'Starter',
        'dishname': 'Vitello Tonato',
        'dish_desc': 'Vitello tonato met ’n frisse toets'
      },
      {
        'id': 43,
        'first_name': 'Letti',
        'last_name': 'Tewkesberrie',
        'customer_id': 14,
        'table': 5,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 44,
        'first_name': 'Letti',
        'last_name': 'Tewkesberrie',
        'customer_id': 14,
        'table': 5,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 45,
        'first_name': 'Emilio',
        'last_name': 'Surguine',
        'customer_id': 15,
        'table': 5,
        'type': 'Starter',
        'dishname': 'Melanzane alla Parmigiana',
        'dish_desc': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
      },
      {
        'id': 46,
        'first_name': 'Emilio',
        'last_name': 'Surguine',
        'customer_id': 15,
        'table': 5,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 47,
        'first_name': 'Emilio',
        'last_name': 'Surguine',
        'customer_id': 15,
        'table': 5,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 48,
        'first_name': 'Susy',
        'last_name': 'Winnett',
        'customer_id': 16,
        'table': 5,
        'type': 'Starter',
        'dishname': 'Orecchiette met Tonijn',
        'dish_desc': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
      },
      {
        'id': 49,
        'first_name': 'Susy',
        'last_name': 'Winnett',
        'customer_id': 16,
        'table': 5,
        'type': 'Main',
        'dishname': 'Kalfsschnitzel met Citroen',
        'dish_desc': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
      },
      {
        'id': 50,
        'first_name': 'Susy',
        'last_name': 'Winnett',
        'customer_id': 16,
        'table': 5,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 51,
        'first_name': 'Randolph',
        'last_name': 'Hazlewood',
        'customer_id': 17,
        'table': 6,
        'type': 'Starter',
        'dishname': 'Kroketjes van Oud Brugge Kaas',
        'dish_desc': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
      },
      {
        'id': 52,
        'first_name': 'Randolph',
        'last_name': 'Hazlewood',
        'customer_id': 17,
        'table': 6,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 53,
        'first_name': 'Randolph',
        'last_name': 'Hazlewood',
        'customer_id': 17,
        'table': 6,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 54,
        'first_name': 'Jacynth',
        'last_name': 'Roddan',
        'customer_id': 18,
        'table': 6,
        'type': 'Starter',
        'dishname': 'Garnaalkroketten',
        'dish_desc': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
      },
      {
        'id': 55,
        'first_name': 'Jacynth',
        'last_name': 'Roddan',
        'customer_id': 18,
        'table': 6,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 56,
        'first_name': 'Jacynth',
        'last_name': 'Roddan',
        'customer_id': 18,
        'table': 6,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 57,
        'first_name': 'Lark',
        'last_name': 'Arrighi',
        'customer_id': 19,
        'table': 6,
        'type': 'Starter',
        'dishname': 'Rundscarpaccio met mascarponecrème',
        'dish_desc': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
      },
      {
        'id': 58,
        'first_name': 'Lark',
        'last_name': 'Arrighi',
        'customer_id': 19,
        'table': 6,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 59,
        'first_name': 'Lark',
        'last_name': 'Arrighi',
        'customer_id': 19,
        'table': 6,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 60,
        'first_name': 'Nerissa',
        'last_name': 'Fourman',
        'customer_id': 20,
        'table': 6,
        'type': 'Starter',
        'dishname': 'Dagverse soep',
        'dish_desc': 'Dagverse soep | gegratineerde toast'
      },
      {
        'id': 61,
        'first_name': 'Nerissa',
        'last_name': 'Fourman',
        'customer_id': 20,
        'table': 6,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 62,
        'first_name': 'Nerissa',
        'last_name': 'Fourman',
        'customer_id': 20,
        'table': 6,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 63,
        'first_name': 'Milly',
        'last_name': 'Wark',
        'customer_id': 21,
        'table': 7,
        'type': 'Starter',
        'dishname': 'Vitello Tonato',
        'dish_desc': 'Vitello tonato met ’n frisse toets'
      },
      {
        'id': 64,
        'first_name': 'Milly',
        'last_name': 'Wark',
        'customer_id': 21,
        'table': 7,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 65,
        'first_name': 'Milly',
        'last_name': 'Wark',
        'customer_id': 21,
        'table': 7,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 66,
        'first_name': 'Farr',
        'last_name': 'Dawes',
        'customer_id': 22,
        'table': 7,
        'type': 'Starter',
        'dishname': 'Melanzane alla Parmigiana',
        'dish_desc': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
      },
      {
        'id': 67,
        'first_name': 'Farr',
        'last_name': 'Dawes',
        'customer_id': 22,
        'table': 7,
        'type': 'Main',
        'dishname': 'Ravioli Vier Kazen',
        'dish_desc': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
      },
      {
        'id': 68,
        'first_name': 'Farr',
        'last_name': 'Dawes',
        'customer_id': 22,
        'table': 7,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 69,
        'first_name': 'Carma',
        'last_name': 'Skentelbury',
        'customer_id': 23,
        'table': 8,
        'type': 'Starter',
        'dishname': 'Orecchiette met Tonijn',
        'dish_desc': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
      },
      {
        'id': 70,
        'first_name': 'Carma',
        'last_name': 'Skentelbury',
        'customer_id': 23,
        'table': 8,
        'type': 'Main',
        'dishname': 'Ravioli Vier Kazen',
        'dish_desc': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
      },
      {
        'id': 71,
        'first_name': 'Carma',
        'last_name': 'Skentelbury',
        'customer_id': 23,
        'table': 8,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 72,
        'first_name': 'Levon',
        'last_name': 'Moat',
        'customer_id': 24,
        'table': 8,
        'type': 'Starter',
        'dishname': 'Kroketjes van Oud Brugge Kaas',
        'dish_desc': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
      },
      {
        'id': 73,
        'first_name': 'Levon',
        'last_name': 'Moat',
        'customer_id': 24,
        'table': 8,
        'type': 'Main',
        'dishname': 'Kalfsschnitzel met Citroen',
        'dish_desc': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
      },
      {
        'id': 74,
        'first_name': 'Levon',
        'last_name': 'Moat',
        'customer_id': 24,
        'table': 8,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 75,
        'first_name': 'Wald',
        'last_name': 'Stanford',
        'customer_id': 25,
        'table': 8,
        'type': 'Starter',
        'dishname': 'Garnaalkroketten',
        'dish_desc': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
      },
      {
        'id': 76,
        'first_name': 'Wald',
        'last_name': 'Stanford',
        'customer_id': 25,
        'table': 8,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 77,
        'first_name': 'Wald',
        'last_name': 'Stanford',
        'customer_id': 25,
        'table': 8,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 78,
        'first_name': 'Gaby',
        'last_name': 'Canada',
        'customer_id': 26,
        'table': 8,
        'type': 'Starter',
        'dishname': 'Rundscarpaccio met mascarponecrème',
        'dish_desc': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
      },
      {
        'id': 79,
        'first_name': 'Gaby',
        'last_name': 'Canada',
        'customer_id': 26,
        'table': 8,
        'type': 'Main',
        'dishname': 'Ravioli Vier Kazen',
        'dish_desc': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
      },
      {
        'id': 80,
        'first_name': 'Gaby',
        'last_name': 'Canada',
        'customer_id': 26,
        'table': 8,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 81,
        'first_name': 'Augustina',
        'last_name': 'Uc',
        'customer_id': 27,
        'table': 9,
        'type': 'Starter',
        'dishname': 'Dagverse soep',
        'dish_desc': 'Dagverse soep | gegratineerde toast'
      },
      {
        'id': 82,
        'first_name': 'Augustina',
        'last_name': 'Uc',
        'customer_id': 27,
        'table': 9,
        'type': 'Main',
        'dishname': 'Ravioli Vier Kazen',
        'dish_desc': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
      },
      {
        'id': 83,
        'first_name': 'Augustina',
        'last_name': 'Uc',
        'customer_id': 27,
        'table': 9,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 84,
        'first_name': 'Mellicent',
        'last_name': 'Daniellot',
        'customer_id': 28,
        'table': 9,
        'type': 'Starter',
        'dishname': 'Vitello Tonato',
        'dish_desc': 'Vitello tonato met ’n frisse toets'
      },
      {
        'id': 85,
        'first_name': 'Mellicent',
        'last_name': 'Daniellot',
        'customer_id': 28,
        'table': 9,
        'type': 'Main',
        'dishname': 'Ravioli Vier Kazen',
        'dish_desc': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
      },
      {
        'id': 86,
        'first_name': 'Mellicent',
        'last_name': 'Daniellot',
        'customer_id': 28,
        'table': 9,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 87,
        'first_name': 'Yetta',
        'last_name': 'Keller',
        'customer_id': 29,
        'table': 9,
        'type': 'Starter',
        'dishname': 'Melanzane alla Parmigiana',
        'dish_desc': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
      },
      {
        'id': 88,
        'first_name': 'Yetta',
        'last_name': 'Keller',
        'customer_id': 29,
        'table': 9,
        'type': 'Main',
        'dishname': 'Ravioli Vier Kazen',
        'dish_desc': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
      },
      {
        'id': 89,
        'first_name': 'Yetta',
        'last_name': 'Keller',
        'customer_id': 29,
        'table': 9,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 90,
        'first_name': 'Glenda',
        'last_name': 'Winram',
        'customer_id': 30,
        'table': 9,
        'type': 'Starter',
        'dishname': 'Orecchiette met Tonijn',
        'dish_desc': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
      },
      {
        'id': 91,
        'first_name': 'Glenda',
        'last_name': 'Winram',
        'customer_id': 30,
        'table': 9,
        'type': 'Main',
        'dishname': 'Ravioli Vier Kazen',
        'dish_desc': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
      },
      {
        'id': 92,
        'first_name': 'Glenda',
        'last_name': 'Winram',
        'customer_id': 30,
        'table': 9,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 93,
        'first_name': 'Blondie',
        'last_name': 'Ladbrooke',
        'customer_id': 31,
        'table': 10,
        'type': 'Starter',
        'dishname': 'Kroketjes van Oud Brugge Kaas',
        'dish_desc': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
      },
      {
        'id': 94,
        'first_name': 'Blondie',
        'last_name': 'Ladbrooke',
        'customer_id': 31,
        'table': 10,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 95,
        'first_name': 'Blondie',
        'last_name': 'Ladbrooke',
        'customer_id': 31,
        'table': 10,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 96,
        'first_name': 'Vasily',
        'last_name': 'Antonio',
        'customer_id': 32,
        'table': 10,
        'type': 'Starter',
        'dishname': 'Garnaalkroketten',
        'dish_desc': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
      },
      {
        'id': 97,
        'first_name': 'Vasily',
        'last_name': 'Antonio',
        'customer_id': 32,
        'table': 10,
        'type': 'Main',
        'dishname': 'Kalfsschnitzel met Citroen',
        'dish_desc': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
      },
      {
        'id': 98,
        'first_name': 'Vasily',
        'last_name': 'Antonio',
        'customer_id': 32,
        'table': 10,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 99,
        'first_name': 'Sabina',
        'last_name': 'Mardell',
        'customer_id': 33,
        'table': 10,
        'type': 'Starter',
        'dishname': 'Rundscarpaccio met mascarponecrème',
        'dish_desc': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
      },
      {
        'id': 100,
        'first_name': 'Sabina',
        'last_name': 'Mardell',
        'customer_id': 33,
        'table': 10,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 101,
        'first_name': 'Sabina',
        'last_name': 'Mardell',
        'customer_id': 33,
        'table': 10,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 102,
        'first_name': 'Ashley',
        'last_name': 'Gergolet',
        'customer_id': 34,
        'table': 11,
        'type': 'Starter',
        'dishname': 'Dagverse soep',
        'dish_desc': 'Dagverse soep | gegratineerde toast'
      },
      {
        'id': 103,
        'first_name': 'Ashley',
        'last_name': 'Gergolet',
        'customer_id': 34,
        'table': 11,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 104,
        'first_name': 'Ashley',
        'last_name': 'Gergolet',
        'customer_id': 34,
        'table': 11,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 105,
        'first_name': 'Lanette',
        'last_name': 'Tod',
        'customer_id': 35,
        'table': 11,
        'type': 'Starter',
        'dishname': 'Vitello Tonato',
        'dish_desc': 'Vitello tonato met ’n frisse toets'
      },
      {
        'id': 106,
        'first_name': 'Lanette',
        'last_name': 'Tod',
        'customer_id': 35,
        'table': 11,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 107,
        'first_name': 'Lanette',
        'last_name': 'Tod',
        'customer_id': 35,
        'table': 11,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 108,
        'first_name': 'Charlene',
        'last_name': 'Tonks',
        'customer_id': 36,
        'table': 11,
        'type': 'Starter',
        'dishname': 'Melanzane alla Parmigiana',
        'dish_desc': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
      },
      {
        'id': 109,
        'first_name': 'Charlene',
        'last_name': 'Tonks',
        'customer_id': 36,
        'table': 11,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 110,
        'first_name': 'Charlene',
        'last_name': 'Tonks',
        'customer_id': 36,
        'table': 11,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 111,
        'first_name': 'Malissia',
        'last_name': 'Agus',
        'customer_id': 37,
        'table': 11,
        'type': 'Starter',
        'dishname': 'Orecchiette met Tonijn',
        'dish_desc': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
      },
      {
        'id': 112,
        'first_name': 'Malissia',
        'last_name': 'Agus',
        'customer_id': 37,
        'table': 11,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 113,
        'first_name': 'Malissia',
        'last_name': 'Agus',
        'customer_id': 37,
        'table': 11,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 114,
        'first_name': 'Simone',
        'last_name': 'Piola',
        'customer_id': 38,
        'table': 12,
        'type': 'Starter',
        'dishname': 'Kroketjes van Oud Brugge Kaas',
        'dish_desc': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
      },
      {
        'id': 115,
        'first_name': 'Simone',
        'last_name': 'Piola',
        'customer_id': 38,
        'table': 12,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 116,
        'first_name': 'Simone',
        'last_name': 'Piola',
        'customer_id': 38,
        'table': 12,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 117,
        'first_name': 'Ripley',
        'last_name': 'Frankton',
        'customer_id': 39,
        'table': 12,
        'type': 'Starter',
        'dishname': 'Garnaalkroketten',
        'dish_desc': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
      },
      {
        'id': 118,
        'first_name': 'Ripley',
        'last_name': 'Frankton',
        'customer_id': 39,
        'table': 12,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 119,
        'first_name': 'Ripley',
        'last_name': 'Frankton',
        'customer_id': 39,
        'table': 12,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 120,
        'first_name': 'Scott',
        'last_name': 'Stainfield',
        'customer_id': 40,
        'table': 13,
        'type': 'Starter',
        'dishname': 'Rundscarpaccio met mascarponecrème',
        'dish_desc': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
      },
      {
        'id': 121,
        'first_name': 'Scott',
        'last_name': 'Stainfield',
        'customer_id': 40,
        'table': 13,
        'type': 'Main',
        'dishname': 'Kalfsschnitzel met Citroen',
        'dish_desc': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
      },
      {
        'id': 122,
        'first_name': 'Scott',
        'last_name': 'Stainfield',
        'customer_id': 40,
        'table': 13,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 123,
        'first_name': 'Wade',
        'last_name': 'Snazle',
        'customer_id': 41,
        'table': 13,
        'type': 'Starter',
        'dishname': 'Dagverse soep',
        'dish_desc': 'Dagverse soep | gegratineerde toast'
      },
      {
        'id': 124,
        'first_name': 'Wade',
        'last_name': 'Snazle',
        'customer_id': 41,
        'table': 13,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 125,
        'first_name': 'Wade',
        'last_name': 'Snazle',
        'customer_id': 41,
        'table': 13,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 126,
        'first_name': 'Fabiano',
        'last_name': 'Flavelle',
        'customer_id': 42,
        'table': 13,
        'type': 'Starter',
        'dishname': 'Vitello Tonato',
        'dish_desc': 'Vitello tonato met ’n frisse toets'
      },
      {
        'id': 127,
        'first_name': 'Fabiano',
        'last_name': 'Flavelle',
        'customer_id': 42,
        'table': 13,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 128,
        'first_name': 'Fabiano',
        'last_name': 'Flavelle',
        'customer_id': 42,
        'table': 13,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 129,
        'first_name': 'Urson',
        'last_name': 'Hartright',
        'customer_id': 43,
        'table': 14,
        'type': 'Starter',
        'dishname': 'Melanzane alla Parmigiana',
        'dish_desc': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
      },
      {
        'id': 130,
        'first_name': 'Urson',
        'last_name': 'Hartright',
        'customer_id': 43,
        'table': 14,
        'type': 'Main',
        'dishname': 'The Real Ocean Burger',
        'dish_desc': 'Vers gemaakte visburger | Oosters getint | koolsla | frietjes'
      },
      {
        'id': 131,
        'first_name': 'Urson',
        'last_name': 'Hartright',
        'customer_id': 43,
        'table': 14,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 132,
        'first_name': 'Ottilie',
        'last_name': 'Rassell',
        'customer_id': 44,
        'table': 14,
        'type': 'Starter',
        'dishname': 'Orecchiette met Tonijn',
        'dish_desc': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
      },
      {
        'id': 133,
        'first_name': 'Ottilie',
        'last_name': 'Rassell',
        'customer_id': 44,
        'table': 14,
        'type': 'Main',
        'dishname': 'The Real Ocean Burger',
        'dish_desc': 'Vers gemaakte visburger | Oosters getint | koolsla | frietjes'
      },
      {
        'id': 134,
        'first_name': 'Ottilie',
        'last_name': 'Rassell',
        'customer_id': 44,
        'table': 14,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 135,
        'first_name': 'Melisent',
        'last_name': 'Bolgar',
        'customer_id': 45,
        'table': 14,
        'type': 'Starter',
        'dishname': 'Kroketjes van Oud Brugge Kaas',
        'dish_desc': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
      },
      {
        'id': 136,
        'first_name': 'Melisent',
        'last_name': 'Bolgar',
        'customer_id': 45,
        'table': 14,
        'type': 'Main',
        'dishname': 'The Real Ocean Burger',
        'dish_desc': 'Vers gemaakte visburger | Oosters getint | koolsla | frietjes'
      },
      {
        'id': 137,
        'first_name': 'Melisent',
        'last_name': 'Bolgar',
        'customer_id': 45,
        'table': 14,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 138,
        'first_name': 'Jolee',
        'last_name': 'Ghidelli',
        'customer_id': 46,
        'table': 14,
        'type': 'Starter',
        'dishname': 'Garnaalkroketten',
        'dish_desc': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
      },
      {
        'id': 139,
        'first_name': 'Jolee',
        'last_name': 'Ghidelli',
        'customer_id': 46,
        'table': 14,
        'type': 'Main',
        'dishname': 'The Real Ocean Burger',
        'dish_desc': 'Vers gemaakte visburger | Oosters getint | koolsla | frietjes'
      },
      {
        'id': 140,
        'first_name': 'Jolee',
        'last_name': 'Ghidelli',
        'customer_id': 46,
        'table': 14,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 141,
        'first_name': 'Filmer',
        'last_name': 'Mityakov',
        'customer_id': 47,
        'table': 15,
        'type': 'Starter',
        'dishname': 'Rundscarpaccio met mascarponecrème',
        'dish_desc': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
      },
      {
        'id': 142,
        'first_name': 'Filmer',
        'last_name': 'Mityakov',
        'customer_id': 47,
        'table': 15,
        'type': 'Main',
        'dishname': 'The Real Ocean Burger',
        'dish_desc': 'Vers gemaakte visburger | Oosters getint | koolsla | frietjes'
      },
      {
        'id': 143,
        'first_name': 'Filmer',
        'last_name': 'Mityakov',
        'customer_id': 47,
        'table': 15,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      },
      {
        'id': 144,
        'first_name': 'Anett',
        'last_name': 'Handsheart',
        'customer_id': 48,
        'table': 15,
        'type': 'Starter',
        'dishname': 'Dagverse soep',
        'dish_desc': 'Dagverse soep | gegratineerde toast'
      },
      {
        'id': 145,
        'first_name': 'Anett',
        'last_name': 'Handsheart',
        'customer_id': 48,
        'table': 15,
        'type': 'Main',
        'dishname': 'Kalfsschnitzel met Citroen',
        'dish_desc': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
      },
      {
        'id': 146,
        'first_name': 'Anett',
        'last_name': 'Handsheart',
        'customer_id': 48,
        'table': 15,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      }
    ];
    const dishes = [
      {
        'id': 1,
        'type': 'Starter',
        'dishname': 'Vitello Tonato',
        'dish_desc': 'Vitello tonato met ’n frisse toets'
      },
      {
        'id': 2,
        'type': 'Starter',
        'dishname': 'Melanzane alla Parmigiana',
        'dish_desc': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
      },
      {
        'id': 3,
        'type': 'Starter',
        'dishname': 'Orecchiette met Tonijn',
        'dish_desc': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
      },
      {
        'id': 4,
        'type': 'Starter',
        'dishname': 'Kroketjes van Oud Brugge Kaas',
        'dish_desc': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
      },
      {
        'id': 5,
        'type': 'Starter',
        'dishname': 'Garnaalkroketten',
        'dish_desc': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
      },
      {
        'id': 6,
        'type': 'Starter',
        'dishname': 'Rundscarpaccio met mascarponecrème',
        'dish_desc': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
      },
      {
        'id': 7,
        'type': 'Starter',
        'dishname': 'Dagverse soep',
        'dish_desc': 'Dagverse soep | gegratineerde toast'
      },
      {
        'id': 8,
        'type': 'Main',
        'dishname': 'Kalfsschnitzel met Citroen',
        'dish_desc': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
      },
      {
        'id': 9,
        'type': 'Main',
        'dishname': 'Classic Steak',
        'dish_desc': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
      },
      {
        'id': 10,
        'type': 'Main',
        'dishname': 'Vispannetje met Duchesse Aardappelen',
        'dish_desc': 'Gegratineerd vispannetje met diverse vissoorten | duchesse aardappelen'
      },
      {
        'id': 11,
        'type': 'Main',
        'dishname': 'Zeetong Meunière',
        'dish_desc': 'Zeetong Meunière 450 gram met boter | limoensaus | kasteelaardappeltjes'
      },
      {
        'id': 12,
        'type': 'Main',
        'dishname': 'Pasta Carbonara',
        'dish_desc': 'Verse fettuccini pasta “Carbonara”'
      },
      {
        'id': 13,
        'type': 'Main',
        'dishname': 'Ravioli Vier Kazen',
        'dish_desc': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
      },
      {
        'id': 14,
        'type': 'Main',
        'dishname': 'The Real American Burger',
        'dish_desc': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
      },
      {
        'id': 15,
        'type': 'Main',
        'dishname': 'The Real Ocean Burger',
        'dish_desc': 'Vers gemaakte visburger | Oosters getint | koolsla | frietjes'
      },
      {
        'id': 16,
        'type': 'Dessert',
        'dishname': 'Dame Blanche “2018”',
        'dish_desc': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
      },
      {
        'id': 17,
        'type': 'Dessert',
        'dishname': 'Créme bruleé',
        'dish_desc': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
      },
      {
        'id': 18,
        'type': 'Dessert',
        'dishname': 'Soepje van Rode Vruchten',
        'dish_desc': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
      }
    ];

    return {tables, orders, dishes};
  }
}
