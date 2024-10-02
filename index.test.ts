import { describe, expect, test } from 'vitest'
import type { IPerson } from './enities/interfaces/IPerson'
import { property } from './index'

describe('Verwalter', () => {
    test('property instance should contains all informations about a property and its owner and manager and the current guests', () => {
        const sut = property

        expect(sut).toHaveProperty('id')
        expect(sut).toHaveProperty('name')
        expect(sut).toHaveProperty('description')
        expect(sut).toHaveProperty('address')
        expect(sut.address).toHaveProperty('street')
        expect(sut.address).toHaveProperty('zip')
        expect(sut.address).toHaveProperty('city')

        expect(sut).toHaveProperty('owner')
        testPerson(sut.owner)

        expect(sut).toHaveProperty('propertyManager')
        testPerson(sut.propertyManager)
    })

    function testPerson(person: IPerson){
        expect(person).toHaveProperty('id')
        expect(person).toHaveProperty('name')
        expect(person).toHaveProperty('address')
        expect(person.address).toHaveProperty('street')
        expect(person.address).toHaveProperty('zip')
        expect(person.address).toHaveProperty('city')
    }
})