import React from 'react'
import { UserType } from '../../HW8'
import {homeWorkReducer} from '../homeWorkReducer'

let initialState: UserType // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sortUp'})
    const sortedUpState = [
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 0, name: 'Кот', age: 3},
    ]

    expect(newState).toStrictEqual(sortedUpState)
})

test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sortDown'})
    const sortedDownState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 5, name: 'Ирина', age: 55},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 1, name: 'Александр', age: 66},
    ]

    expect(newState).toStrictEqual(sortedDownState)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check'})
    const checkedState = [
        {_id: 1, name: 'Александр', age: 66},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]

    expect(newState).toStrictEqual(checkedState)

})
