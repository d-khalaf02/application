import 'reflect-metadata'
import { IBooking, IPerson, IProperty, Person, PERSON_TYPES, TYPES } from '@fewo-monorepo/entities'
import { emptyBooking, mockBooking, mockPerson, mockProperty, unknownProperty, container } from '@fewo-monorepo/utils'

let property : IProperty = unknownProperty
let booking: IBooking = emptyBooking

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
    console.log(':::::::::: HERE 1')
} catch(error){
    console.log(error)
}

console.log(property)
console.log(booking)

export { property }