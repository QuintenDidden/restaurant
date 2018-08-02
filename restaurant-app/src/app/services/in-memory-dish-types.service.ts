import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDishTypesService implements InMemoryDbService {
  createDb() {
    const dishtypes = [
      {
        'id': 1,
        'name': 'Frodo',
      },
      {
        'id': 2,
        'name': 'Gandalf',
      },
      {
        'id': 3,
        'name': 'Ork',
      },
      {
        'id': 4,
        'name': 'Aragorn',
      },
      {
        'id': 5,
        'name': 'Dwarf',
      },
      {
        'id': 6,
        'name': 'Smeagol',
      }
    ];
    return {dishtypes};
  }
}

