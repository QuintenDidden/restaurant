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
          'dish': 1
        },
        {
          'id': 0,
          'first_name': 'Jordain',
          'last_name': 'Froment',
          'customer_id': 0,
          'table': 1,
          'dish': 8
        },
        {
          'id': 0,
          'first_name': 'Jordain',
          'last_name': 'Froment',
          'customer_id': 0,
          'table': 1,
          'dish': 1
        },
        {
          'id': 1,
          'first_name': 'Holly',
          'last_name': 'Serridge',
          'customer_id': 1,
          'table': 1,
          'dish': 2
        },
        {
          'id': 1,
          'first_name': 'Holly',
          'last_name': 'Serridge',
          'customer_id': 1,
          'table': 1,
          'dish': 9
        },
        {
          'id': 1,
          'first_name': 'Holly',
          'last_name': 'Serridge',
          'customer_id': 1,
          'table': 1,
          'dish': 2
        },
        {
          'id': 2,
          'first_name': 'Idelle',
          'last_name': 'Maffione',
          'customer_id': 2,
          'table': 1,
          'dish': 3
        },
        {
          'id': 2,
          'first_name': 'Idelle',
          'last_name': 'Maffione',
          'customer_id': 2,
          'table': 1,
          'dish': 10
        },
        {
          'id': 2,
          'first_name': 'Idelle',
          'last_name': 'Maffione',
          'customer_id': 2,
          'table': 1,
          'dish': 3
        },
        {
          'id': 3,
          'first_name': 'Tanny',
          'last_name': 'McCathy',
          'customer_id': 3,
          'table': 2,
          'dish': 4
        },
        {
          'id': 3,
          'first_name': 'Tanny',
          'last_name': 'McCathy',
          'customer_id': 3,
          'table': 2,
          'dish': 11
        },
        {
          'id': 3,
          'first_name': 'Tanny',
          'last_name': 'McCathy',
          'customer_id': 3,
          'table': 2,
          'dish': 4
        },
        {
          'id': 4,
          'first_name': 'Andy',
          'last_name': 'Grattan',
          'customer_id': 4,
          'table': 2,
          'dish': 5
        },
        {
          'id': 4,
          'first_name': 'Andy',
          'last_name': 'Grattan',
          'customer_id': 4,
          'table': 2,
          'dish': 12
        },
        {
          'id': 4,
          'first_name': 'Andy',
          'last_name': 'Grattan',
          'customer_id': 4,
          'table': 2,
          'dish': 5
        },
        {
          'id': 5,
          'first_name': 'Cleve',
          'last_name': 'Abisetti',
          'customer_id': 5,
          'table': 2,
          'dish': 6
        },
        {
          'id': 5,
          'first_name': 'Cleve',
          'last_name': 'Abisetti',
          'customer_id': 5,
          'table': 2,
          'dish': 13
        },
        {
          'id': 5,
          'first_name': 'Cleve',
          'last_name': 'Abisetti',
          'customer_id': 5,
          'table': 2,
          'dish': 6
        },
        {
          'id': 6,
          'first_name': 'Barbabra',
          'last_name': 'Houson',
          'customer_id': 6,
          'table': 2,
          'dish': 7
        },
        {
          'id': 6,
          'first_name': 'Barbabra',
          'last_name': 'Houson',
          'customer_id': 6,
          'table': 2,
          'dish': 14
        },
        {
          'id': 6,
          'first_name': 'Barbabra',
          'last_name': 'Houson',
          'customer_id': 6,
          'table': 2,
          'dish': 7
        },
        {
          'id': 7,
          'first_name': 'Mill',
          'last_name': 'Oldcote',
          'customer_id': 7,
          'table': 3,
          'dish': 1
        },
        {
          'id': 7,
          'first_name': 'Mill',
          'last_name': 'Oldcote',
          'customer_id': 7,
          'table': 3,
          'dish': 15
        },
        {
          'id': 7,
          'first_name': 'Mill',
          'last_name': 'Oldcote',
          'customer_id': 7,
          'table': 3,
          'dish': 1
        },
        {
          'id': 8,
          'first_name': 'Lydia',
          'last_name': 'Lightbourne',
          'customer_id': 8,
          'table': 3,
          'dish': 2
        },
        {
          'id': 8,
          'first_name': 'Lydia',
          'last_name': 'Lightbourne',
          'customer_id': 8,
          'table': 3,
          'dish': 8
        },
        {
          'id': 8,
          'first_name': 'Lydia',
          'last_name': 'Lightbourne',
          'customer_id': 8,
          'table': 3,
          'dish': 2
        },
        {
          'id': 9,
          'first_name': 'Mark',
          'last_name': 'Bothams',
          'customer_id': 9,
          'table': 4,
          'dish': 3
        },
        {
          'id': 9,
          'first_name': 'Mark',
          'last_name': 'Bothams',
          'customer_id': 9,
          'table': 4,
          'dish': 9
        },
        {
          'id': 9,
          'first_name': 'Mark',
          'last_name': 'Bothams',
          'customer_id': 9,
          'table': 4,
          'dish': 3
        },
        {
          'id': 10,
          'first_name': 'Miltie',
          'last_name': 'Deeth',
          'customer_id': 10,
          'table': 4,
          'dish': 4
        },
        {
          'id': 10,
          'first_name': 'Miltie',
          'last_name': 'Deeth',
          'customer_id': 10,
          'table': 4,
          'dish': 10
        },
        {
          'id': 10,
          'first_name': 'Miltie',
          'last_name': 'Deeth',
          'customer_id': 10,
          'table': 4,
          'dish': 4
        },
        {
          'id': 11,
          'first_name': 'Linea',
          'last_name': 'Dregan',
          'customer_id': 11,
          'table': 4,
          'dish': 5
        },
        {
          'id': 11,
          'first_name': 'Linea',
          'last_name': 'Dregan',
          'customer_id': 11,
          'table': 4,
          'dish': 11
        },
        {
          'id': 11,
          'first_name': 'Linea',
          'last_name': 'Dregan',
          'customer_id': 11,
          'table': 4,
          'dish': 5
        },
        {
          'id': 12,
          'first_name': 'Pierce',
          'last_name': 'McElwee',
          'customer_id': 12,
          'table': 4,
          'dish': 6
        },
        {
          'id': 12,
          'first_name': 'Pierce',
          'last_name': 'McElwee',
          'customer_id': 12,
          'table': 4,
          'dish': 12
        },
        {
          'id': 12,
          'first_name': 'Pierce',
          'last_name': 'McElwee',
          'customer_id': 12,
          'table': 4,
          'dish': 6
        },
        {
          'id': 13,
          'first_name': 'Doria',
          'last_name': 'Randalson',
          'customer_id': 13,
          'table': 5,
          'dish': 7
        },
        {
          'id': 13,
          'first_name': 'Doria',
          'last_name': 'Randalson',
          'customer_id': 13,
          'table': 5,
          'dish': 13
        },
        {
          'id': 13,
          'first_name': 'Doria',
          'last_name': 'Randalson',
          'customer_id': 13,
          'table': 5,
          'dish': 7
        },
        {
          'id': 14,
          'first_name': 'Letti',
          'last_name': 'Tewkesberrie',
          'customer_id': 14,
          'table': 5,
          'dish': 1
        },
        {
          'id': 14,
          'first_name': 'Letti',
          'last_name': 'Tewkesberrie',
          'customer_id': 14,
          'table': 5,
          'dish': 14
        },
        {
          'id': 14,
          'first_name': 'Letti',
          'last_name': 'Tewkesberrie',
          'customer_id': 14,
          'table': 5,
          'dish': 1
        },
        {
          'id': 15,
          'first_name': 'Emilio',
          'last_name': 'Surguine',
          'customer_id': 15,
          'table': 5,
          'dish': 2
        },
        {
          'id': 15,
          'first_name': 'Emilio',
          'last_name': 'Surguine',
          'customer_id': 15,
          'table': 5,
          'dish': 15
        },
        {
          'id': 15,
          'first_name': 'Emilio',
          'last_name': 'Surguine',
          'customer_id': 15,
          'table': 5,
          'dish': 2
        },
        {
          'id': 16,
          'first_name': 'Susy',
          'last_name': 'Winnett',
          'customer_id': 16,
          'table': 5,
          'dish': 3
        },
        {
          'id': 16,
          'first_name': 'Susy',
          'last_name': 'Winnett',
          'customer_id': 16,
          'table': 5,
          'dish': 8
        },
        {
          'id': 16,
          'first_name': 'Susy',
          'last_name': 'Winnett',
          'customer_id': 16,
          'table': 5,
          'dish': 3
        },
        {
          'id': 17,
          'first_name': 'Randolph',
          'last_name': 'Hazlewood',
          'customer_id': 17,
          'table': 6,
          'dish': 4
        },
        {
          'id': 17,
          'first_name': 'Randolph',
          'last_name': 'Hazlewood',
          'customer_id': 17,
          'table': 6,
          'dish': 9
        },
        {
          'id': 17,
          'first_name': 'Randolph',
          'last_name': 'Hazlewood',
          'customer_id': 17,
          'table': 6,
          'dish': 4
        },
        {
          'id': 18,
          'first_name': 'Jacynth',
          'last_name': 'Roddan',
          'customer_id': 18,
          'table': 6,
          'dish': 5
        },
        {
          'id': 18,
          'first_name': 'Jacynth',
          'last_name': 'Roddan',
          'customer_id': 18,
          'table': 6,
          'dish': 10
        },
        {
          'id': 18,
          'first_name': 'Jacynth',
          'last_name': 'Roddan',
          'customer_id': 18,
          'table': 6,
          'dish': 5
        },
        {
          'id': 19,
          'first_name': 'Lark',
          'last_name': 'Arrighi',
          'customer_id': 19,
          'table': 6,
          'dish': 6
        },
        {
          'id': 19,
          'first_name': 'Lark',
          'last_name': 'Arrighi',
          'customer_id': 19,
          'table': 6,
          'dish': 11
        },
        {
          'id': 19,
          'first_name': 'Lark',
          'last_name': 'Arrighi',
          'customer_id': 19,
          'table': 6,
          'dish': 6
        },
        {
          'id': 20,
          'first_name': 'Nerissa',
          'last_name': 'Fourman',
          'customer_id': 20,
          'table': 6,
          'dish': 7
        },
        {
          'id': 20,
          'first_name': 'Nerissa',
          'last_name': 'Fourman',
          'customer_id': 20,
          'table': 6,
          'dish': 12
        },
        {
          'id': 20,
          'first_name': 'Nerissa',
          'last_name': 'Fourman',
          'customer_id': 20,
          'table': 6,
          'dish': 7
        },
        {
          'id': 21,
          'first_name': 'Milly',
          'last_name': 'Wark',
          'customer_id': 21,
          'table': 7,
          'dish': 1
        },
        {
          'id': 21,
          'first_name': 'Milly',
          'last_name': 'Wark',
          'customer_id': 21,
          'table': 7,
          'dish': 13
        },
        {
          'id': 21,
          'first_name': 'Milly',
          'last_name': 'Wark',
          'customer_id': 21,
          'table': 7,
          'dish': 1
        },
        {
          'id': 22,
          'first_name': 'Farr',
          'last_name': 'Dawes',
          'customer_id': 22,
          'table': 7,
          'dish': 2
        },
        {
          'id': 22,
          'first_name': 'Farr',
          'last_name': 'Dawes',
          'customer_id': 22,
          'table': 7,
          'dish': 14
        },
        {
          'id': 22,
          'first_name': 'Farr',
          'last_name': 'Dawes',
          'customer_id': 22,
          'table': 7,
          'dish': 2
        },
        {
          'id': 23,
          'first_name': 'Carma',
          'last_name': 'Skentelbury',
          'customer_id': 23,
          'table': 8,
          'dish': 3
        },
        {
          'id': 23,
          'first_name': 'Carma',
          'last_name': 'Skentelbury',
          'customer_id': 23,
          'table': 8,
          'dish': 15
        },
        {
          'id': 23,
          'first_name': 'Carma',
          'last_name': 'Skentelbury',
          'customer_id': 23,
          'table': 8,
          'dish': 3
        },
        {
          'id': 24,
          'first_name': 'Levon',
          'last_name': 'Moat',
          'customer_id': 24,
          'table': 8,
          'dish': 4
        },
        {
          'id': 24,
          'first_name': 'Levon',
          'last_name': 'Moat',
          'customer_id': 24,
          'table': 8,
          'dish': 8
        },
        {
          'id': 24,
          'first_name': 'Levon',
          'last_name': 'Moat',
          'customer_id': 24,
          'table': 8,
          'dish': 4
        },
        {
          'id': 25,
          'first_name': 'Wald',
          'last_name': 'Stanford',
          'customer_id': 25,
          'table': 8,
          'dish': 5
        },
        {
          'id': 25,
          'first_name': 'Wald',
          'last_name': 'Stanford',
          'customer_id': 25,
          'table': 8,
          'dish': 9
        },
        {
          'id': 25,
          'first_name': 'Wald',
          'last_name': 'Stanford',
          'customer_id': 25,
          'table': 8,
          'dish': 5
        },
        {
          'id': 26,
          'first_name': 'Gaby',
          'last_name': 'Canada',
          'customer_id': 26,
          'table': 8,
          'dish': 6
        },
        {
          'id': 26,
          'first_name': 'Gaby',
          'last_name': 'Canada',
          'customer_id': 26,
          'table': 8,
          'dish': 10
        },
        {
          'id': 26,
          'first_name': 'Gaby',
          'last_name': 'Canada',
          'customer_id': 26,
          'table': 8,
          'dish': 6
        },
        {
          'id': 27,
          'first_name': 'Augustina',
          'last_name': 'Uc',
          'customer_id': 27,
          'table': 9,
          'dish': 7
        },
        {
          'id': 27,
          'first_name': 'Augustina',
          'last_name': 'Uc',
          'customer_id': 27,
          'table': 9,
          'dish': 11
        },
        {
          'id': 27,
          'first_name': 'Augustina',
          'last_name': 'Uc',
          'customer_id': 27,
          'table': 9,
          'dish': 7
        },
        {
          'id': 28,
          'first_name': 'Mellicent',
          'last_name': 'Daniellot',
          'customer_id': 28,
          'table': 9,
          'dish': 1
        },
        {
          'id': 28,
          'first_name': 'Mellicent',
          'last_name': 'Daniellot',
          'customer_id': 28,
          'table': 9,
          'dish': 12
        },
        {
          'id': 28,
          'first_name': 'Mellicent',
          'last_name': 'Daniellot',
          'customer_id': 28,
          'table': 9,
          'dish': 1
        },
        {
          'id': 29,
          'first_name': 'Yetta',
          'last_name': 'Keller',
          'customer_id': 29,
          'table': 9,
          'dish': 2
        },
        {
          'id': 29,
          'first_name': 'Yetta',
          'last_name': 'Keller',
          'customer_id': 29,
          'table': 9,
          'dish': 13
        },
        {
          'id': 29,
          'first_name': 'Yetta',
          'last_name': 'Keller',
          'customer_id': 29,
          'table': 9,
          'dish': 2
        },
        {
          'id': 30,
          'first_name': 'Glenda',
          'last_name': 'Winram',
          'customer_id': 30,
          'table': 9,
          'dish': 3
        },
        {
          'id': 30,
          'first_name': 'Glenda',
          'last_name': 'Winram',
          'customer_id': 30,
          'table': 9,
          'dish': 14
        },
        {
          'id': 30,
          'first_name': 'Glenda',
          'last_name': 'Winram',
          'customer_id': 30,
          'table': 9,
          'dish': 3
        },
        {
          'id': 31,
          'first_name': 'Blondie',
          'last_name': 'Ladbrooke',
          'customer_id': 31,
          'table': 10,
          'dish': 4
        },
        {
          'id': 31,
          'first_name': 'Blondie',
          'last_name': 'Ladbrooke',
          'customer_id': 31,
          'table': 10,
          'dish': 15
        },
        {
          'id': 31,
          'first_name': 'Blondie',
          'last_name': 'Ladbrooke',
          'customer_id': 31,
          'table': 10,
          'dish': 4
        },
        {
          'id': 32,
          'first_name': 'Vasily',
          'last_name': 'Antonio',
          'customer_id': 32,
          'table': 10,
          'dish': 5
        },
        {
          'id': 32,
          'first_name': 'Vasily',
          'last_name': 'Antonio',
          'customer_id': 32,
          'table': 10,
          'dish': 8
        },
        {
          'id': 32,
          'first_name': 'Vasily',
          'last_name': 'Antonio',
          'customer_id': 32,
          'table': 10,
          'dish': 5
        },
        {
          'id': 33,
          'first_name': 'Sabina',
          'last_name': 'Mardell',
          'customer_id': 33,
          'table': 10,
          'dish': 6
        },
        {
          'id': 33,
          'first_name': 'Sabina',
          'last_name': 'Mardell',
          'customer_id': 33,
          'table': 10,
          'dish': 9
        },
        {
          'id': 33,
          'first_name': 'Sabina',
          'last_name': 'Mardell',
          'customer_id': 33,
          'table': 10,
          'dish': 6
        },
        {
          'id': 34,
          'first_name': 'Ashley',
          'last_name': 'Gergolet',
          'customer_id': 34,
          'table': 11,
          'dish': 7
        },
        {
          'id': 34,
          'first_name': 'Ashley',
          'last_name': 'Gergolet',
          'customer_id': 34,
          'table': 11,
          'dish': 10
        },
        {
          'id': 34,
          'first_name': 'Ashley',
          'last_name': 'Gergolet',
          'customer_id': 34,
          'table': 11,
          'dish': 7
        },
        {
          'id': 35,
          'first_name': 'Lanette',
          'last_name': 'Tod',
          'customer_id': 35,
          'table': 11,
          'dish': 1
        },
        {
          'id': 35,
          'first_name': 'Lanette',
          'last_name': 'Tod',
          'customer_id': 35,
          'table': 11,
          'dish': 11
        },
        {
          'id': 35,
          'first_name': 'Lanette',
          'last_name': 'Tod',
          'customer_id': 35,
          'table': 11,
          'dish': 1
        },
        {
          'id': 36,
          'first_name': 'Charlene',
          'last_name': 'Tonks',
          'customer_id': 36,
          'table': 11,
          'dish': 2
        },
        {
          'id': 36,
          'first_name': 'Charlene',
          'last_name': 'Tonks',
          'customer_id': 36,
          'table': 11,
          'dish': 12
        },
        {
          'id': 36,
          'first_name': 'Charlene',
          'last_name': 'Tonks',
          'customer_id': 36,
          'table': 11,
          'dish': 2
        },
        {
          'id': 37,
          'first_name': 'Malissia',
          'last_name': 'Agus',
          'customer_id': 37,
          'table': 11,
          'dish': 3
        },
        {
          'id': 37,
          'first_name': 'Malissia',
          'last_name': 'Agus',
          'customer_id': 37,
          'table': 11,
          'dish': 13
        },
        {
          'id': 37,
          'first_name': 'Malissia',
          'last_name': 'Agus',
          'customer_id': 37,
          'table': 11,
          'dish': 3
        },
        {
          'id': 38,
          'first_name': 'Simone',
          'last_name': 'Piola',
          'customer_id': 38,
          'table': 12,
          'dish': 4
        },
        {
          'id': 38,
          'first_name': 'Simone',
          'last_name': 'Piola',
          'customer_id': 38,
          'table': 12,
          'dish': 14
        },
        {
          'id': 38,
          'first_name': 'Simone',
          'last_name': 'Piola',
          'customer_id': 38,
          'table': 12,
          'dish': 4
        },
        {
          'id': 39,
          'first_name': 'Ripley',
          'last_name': 'Frankton',
          'customer_id': 39,
          'table': 12,
          'dish': 5
        },
        {
          'id': 39,
          'first_name': 'Ripley',
          'last_name': 'Frankton',
          'customer_id': 39,
          'table': 12,
          'dish': 15
        },
        {
          'id': 39,
          'first_name': 'Ripley',
          'last_name': 'Frankton',
          'customer_id': 39,
          'table': 12,
          'dish': 5
        },
        {
          'id': 40,
          'first_name': 'Scott',
          'last_name': 'Stainfield',
          'customer_id': 40,
          'table': 13,
          'dish': 6
        },
        {
          'id': 40,
          'first_name': 'Scott',
          'last_name': 'Stainfield',
          'customer_id': 40,
          'table': 13,
          'dish': 8
        },
        {
          'id': 40,
          'first_name': 'Scott',
          'last_name': 'Stainfield',
          'customer_id': 40,
          'table': 13,
          'dish': 6
        },
        {
          'id': 41,
          'first_name': 'Wade',
          'last_name': 'Snazle',
          'customer_id': 41,
          'table': 13,
          'dish': 7
        },
        {
          'id': 41,
          'first_name': 'Wade',
          'last_name': 'Snazle',
          'customer_id': 41,
          'table': 13,
          'dish': 9
        },
        {
          'id': 41,
          'first_name': 'Wade',
          'last_name': 'Snazle',
          'customer_id': 41,
          'table': 13,
          'dish': 7
        },
        {
          'id': 42,
          'first_name': 'Fabiano',
          'last_name': 'Flavelle',
          'customer_id': 42,
          'table': 13,
          'dish': 1
        },
        {
          'id': 42,
          'first_name': 'Fabiano',
          'last_name': 'Flavelle',
          'customer_id': 42,
          'table': 13,
          'dish': 10
        },
        {
          'id': 42,
          'first_name': 'Fabiano',
          'last_name': 'Flavelle',
          'customer_id': 42,
          'table': 13,
          'dish': 1
        },
        {
          'id': 43,
          'first_name': 'Urson',
          'last_name': 'Hartright',
          'customer_id': 43,
          'table': 14,
          'dish': 2
        },
        {
          'id': 43,
          'first_name': 'Urson',
          'last_name': 'Hartright',
          'customer_id': 43,
          'table': 14,
          'dish': 11
        },
        {
          'id': 43,
          'first_name': 'Urson',
          'last_name': 'Hartright',
          'customer_id': 43,
          'table': 14,
          'dish': 2
        },
        {
          'id': 44,
          'first_name': 'Ottilie',
          'last_name': 'Rassell',
          'customer_id': 44,
          'table': 14,
          'dish': 3
        },
        {
          'id': 44,
          'first_name': 'Ottilie',
          'last_name': 'Rassell',
          'customer_id': 44,
          'table': 14,
          'dish': 12
        },
        {
          'id': 44,
          'first_name': 'Ottilie',
          'last_name': 'Rassell',
          'customer_id': 44,
          'table': 14,
          'dish': 3
        },
        {
          'id': 45,
          'first_name': 'Melisent',
          'last_name': 'Bolgar',
          'customer_id': 45,
          'table': 14,
          'dish': 4
        },
        {
          'id': 45,
          'first_name': 'Melisent',
          'last_name': 'Bolgar',
          'customer_id': 45,
          'table': 14,
          'dish': 13
        },
        {
          'id': 45,
          'first_name': 'Melisent',
          'last_name': 'Bolgar',
          'customer_id': 45,
          'table': 14,
          'dish': 4
        },
        {
          'id': 46,
          'first_name': 'Jolee',
          'last_name': 'Ghidelli',
          'customer_id': 46,
          'table': 14,
          'dish': 5
        },
        {
          'id': 46,
          'first_name': 'Jolee',
          'last_name': 'Ghidelli',
          'customer_id': 46,
          'table': 14,
          'dish': 14
        },
        {
          'id': 46,
          'first_name': 'Jolee',
          'last_name': 'Ghidelli',
          'customer_id': 46,
          'table': 14,
          'dish': 5
        },
        {
          'id': 47,
          'first_name': 'Filmer',
          'last_name': 'Mityakov',
          'customer_id': 47,
          'table': 15,
          'dish': 6
        },
        {
          'id': 47,
          'first_name': 'Filmer',
          'last_name': 'Mityakov',
          'customer_id': 47,
          'table': 15,
          'dish': 15
        },
        {
          'id': 47,
          'first_name': 'Filmer',
          'last_name': 'Mityakov',
          'customer_id': 47,
          'table': 15,
          'dish': 6
        },
        {
          'id': 48,
          'first_name': 'Anett',
          'last_name': 'Handsheart',
          'customer_id': 48,
          'table': 15,
          'dish': 7
        },
        {
          'id': 48,
          'first_name': 'Anett',
          'last_name': 'Handsheart',
          'customer_id': 48,
          'table': 15,
          'dish': 8
        },
        {
          'id': 48,
          'first_name': 'Anett',
          'last_name': 'Handsheart',
          'customer_id': 48,
          'table': 15,
          'dish': 7
        }
      ];
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
    ];
    const dishTypes = [
      {
        'id': 1,
        'name': 'Voorgerecht'
      },
      {
        'id': 2,
        'name': 'Hoofdgerecht'
      },
      {
        'id': 3,
        'name': 'Dessert'
      }
    ];
    return {tables, orders, dishes, dishTypes};
  }
}
