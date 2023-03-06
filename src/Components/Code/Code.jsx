import React from 'react'
import { faker } from '@faker-js/faker';

function Code() {
    return (
        <div className='code'>
            <table style={{ width: "18%" }}>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Place
                    </th>
                </tr>
                <tr>
                    <td>{faker.name.fullName()}</td>
                    <td>{faker.age()}</td>
                    <td>{faker.internet.email()}</td>
                </tr>
            </table>
        </div>
    )
}

export default Code