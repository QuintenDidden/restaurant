import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDishesService implements InMemoryDbService {
  createDb() {
    const dishes = [
        {
          'id': 1,
          'type': 1,
          'name': 'Vitello Tonato',
          'description': 'Vitello tonato met ’n frisse toets'
        },
        {
          'id': 2,
          'type': 1,
          'name': 'Melanzane alla Parmigiana',
          'description': 'Melanzane alla parmigiana | aubergine | romatomaat | buffelmozzarella'
        },
        {
          'id': 3,
          'type': 1,
          'name': 'Orecchiette met Tonijn',
          'description': 'Koude orecchiette met tartaar van tonijn | datterini tomaten | Italiaanse kruiden'
        },
        {
          'id': 4,
          'type': 1,
          'name': 'Kroketjes van Oud Brugge Kaas',
          'description': 'Kroketjes van Oud Brugge kaas | pana cotta van Parmezaanse kaas | kruidensalade'
        },
        {
          'id': 5,
          'type': 1,
          'name': 'Garnaalkroketten',
          'description': '2 stuks huisbereide garnaalkroketten | gefruite peterselie (38 gr KH)'
        },
        {
          'id': 6,
          'type': 1,
          'name': 'Rundscarpaccio met mascarponecrème',
          'description': 'Rundscarpaccio met mascarponecrème | gel van basilicum'
        },
        {
          'id': 7,
          'type': 1,
          'name': 'Dagverse soep',
          'description': 'Dagverse soep | gegratineerde toast'
        },
        {
          'id': 8,
          'type': 2,
          'name': 'Kalfsschnitzel met Citroen',
          'description': 'Kalfsschnitzel met citroensausje | gekookte gepersifleerde aardappeltjes'
        },
        {
          'id': 9,
          'type': 2,
          'name': 'Classic Steak',
          'description': 'Steak van Belgisch wit-blauw met saus naar keuze – 220 gram | frietjes | kruidensalade'
        },
        {
          'id': 10,
          'type': 2,
          'name': 'Vispannetje met Duchesse Aardappelen',
          'description': 'Gegratineerd vispannetje met diverse vissoorten | duchesse aardappelen'
        },
        {
          'id': 11,
          'type': 2,
          'name': 'Zeetong Meunière',
          'description': 'Zeetong Meunière 450 gram met boter | limoensaus | kasteelaardappeltjes'
        },
        {
          'id': 12,
          'type': 2,
          'name': 'Pasta Carbonara',
          'description': 'Verse fettuccini pasta “Carbonara”'
        },
        {
          'id': 13,
          'type': 2,
          'name': 'Ravioli Vier Kazen',
          'description': 'Ravioli vier kazen l saus van groene pesto l oude Parmezaanse kaas l rucola'
        },
        {
          'id': 14,
          'type': 2,
          'name': 'The Real American Burger',
          'description': 'Simmenthal rund 180 gram | kaas | spek | spiegelei | salade | frietjes'
        },
        {
          'id': 15,
          'type': 2,
          'name': 'The Real Ocean Burger',
          'description': 'Vers gemaakte visburger | Oosters getint | koolsla | frietjes'
        },
        {
          'id': 16,
          'type': 3,
          'name': 'Dame Blanche “2018”',
          'description': 'Dame blanche ‘versie 2018’ | vanille roomijs | americain cookies | veliche 70° chocolade saus'
        },
        {
          'id': 17,
          'type': 3,
          'name': 'Créme bruleé',
          'description': 'Crème brûleé klassiek met toets van sinaasappel | Mandarin Napoleon | roomijs van brownie'
        },
        {
          'id': 18,
          'type': 3,
          'name': 'Soepje van Rode Vruchten',
          'description': 'Soepje van rode vruchten | sorbet van limoncello | crumble van meringue'
        }
      ]
    ;
    return {dishes};
  }
}
