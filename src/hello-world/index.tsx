import React, { FC } from 'react'

interface ITestProps {
    name: string
}

const Test: FC<ITestProps> = ({ name }) => {
    return <div>{name}</div>
}

export default Test
