import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDishTypesService implements InMemoryDbService {
  createDb() {
    const dishtypes = [
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
    return {dishtypes};
  }
}

