// src/mock/data/prospectsData.ts

import type { Prospect } from '@/views/prospects/AllProspects/store/allProspectsSlice'

const prospectsData: Prospect[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        img: '/img/avatars/thumb-1.jpg',
        role: 'Manager',
        lastOnline: 1654304400,
        status: 'active',
        personalInfo: {
            location: 'New York',
            title: 'Sales Manager',
            birthday: '01/01/1985',
            phoneNumber: '123-456-7890',
            facebook: '',
            twitter: '',
            pinterest: '',
            linkedIn: '',
        },
        orderHistory: [],
        paymentMethod: [],
        subscription: [],
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        img: '/img/avatars/thumb-2.jpg',
        role: 'Director',
        lastOnline: 1654304400,
        status: 'blocked',
        personalInfo: {
            location: 'London',
            title: 'Marketing Director',
            birthday: '05/10/1990',
            phoneNumber: '987-654-3210',
            facebook: '',
            twitter: '',
            pinterest: '',
            linkedIn: '',
        },
        orderHistory: [],
        paymentMethod: [],
        subscription: [],
    },
]

export default prospectsData
