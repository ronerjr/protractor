import * as faker from 'faker';

export class FormData {
    valid = [
        {
            team: faker.random.number({ min: 0, max: 3 }),
            activity: faker.lorem.words(3),
            startDate: faker.date.recent().toString(),
            endDate: faker.date.future().toString(),
            status: faker.random.number({ min: 0, max: 2 })
        }
    ];
    invalid = [
        {
            team: faker.random.number({ min: 0, max: 3 }),
            activity: faker.lorem.words(3),
            startDate: faker.lorem.word(),
            endDate: faker.date.future().toString(),
            status: faker.random.number({ min: 0, max: 2 })
        }
    ];
}
