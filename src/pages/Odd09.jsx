import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Odd09 = () => {
    const [state, setState] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('https://a67474a4e6e67b1c.mokky.dev/Odd_10')
            setState(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='max-w-[1250px] mx-auto mt-36 max-sm:px-5'>
            <h1 className='text-3xl font-medium text-center text-blue-700'>Payments</h1>
            {state.length ? (
                <table className='mt-10 w-full border-2 border-blue-800'>
                    <thead className='bg-blue-800 text-white'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>#</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.map((product) => {
                            const truePayment = <h1 className='px-3 py-2 rounded-md bg-[#0bff036c]'>Paid</h1>
                            const falsePayment = <h1 className='px-3 py-2 rounded-md bg-[#ff03036c] w-fit'>Not Paid</h1>

                            return (
                                <tr key={product.id} className='bg-white border-b-2 border-blue-800'>
                                    <td className='p-3 text-sm text-gray-700 tracking-wide text-center'>{product.id}</td>
                                    <td className='p-3 text-sm text-gray-700 tracking-wide text-center'>{product.name}</td>
                                    <td className='p-3 text-sm text-gray-700 tracking-wide text-center flex justify-center'>{product.status == false ? falsePayment : truePayment}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            ) : (
                <div className='max-w-[1250px] mx-auto mt-56'>
                    <h1 className='text-3xl font-bold text-red-600 text-center'>There is no students...</h1>
                </div>
            )}
        </div>
    )
}

export default Odd09