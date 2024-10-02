import 'reflect-metadata'
import { PERSON_TYPES } from './entities/enums/Person.enum';
import { IBooking } from './entities/interfaces/IBooking'
import { IPerson } from './entities/interfaces/IPerson'
import { IProperty } from './entities/interfaces/IProperty'
import { Person } from './entities/persons/Person'
import { container } from './inversify/container'
import { TYPES } from './inversify/types'
import { emptyBooking } from './utils/faker/BookingFaker'
import { mockBooking } from './utils/faker/mockBooking'
import { mockPerson } from './utils/faker/mockPerson'
import { mockProperty } from './utils/faker/mockProperty'
import { unknownProperty } from './utils/faker/PropertyFaker'

let property : IProperty
let booking: IBooking

try{
    const owner = mockPerson(PERSON_TYPES.Owner)
    const propertyManager = mockPerson(PERSON_TYPES.PropertyManager)

    const guest1 = mockPerson(PERSON_TYPES.Guest)
    const guest2 = mockPerson(PERSON_TYPES.Guest)
    const guest3 = mockPerson(PERSON_TYPES.Guest)

    container.bind<Person>(TYPES.Owner).toConstantValue(owner)
    container.bind<Person>(TYPES.PropertyManager).toConstantValue(propertyManager)

    property = mockProperty()

    container.bind<IPerson[]>(TYPES.Guests).toConstantValue([
        guest1,
        guest2,
        guest3
    ])
    container.bind<IProperty>(TYPES.Property).toConstantValue(property)

    booking = mockBooking()
} catch(error){
    console.log(error)

    property = unknownProperty
    booking = emptyBooking
}

console.log(booking)

export { property }