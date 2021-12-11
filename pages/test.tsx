import _ from 'lodash'
import { useState, CSSProperties } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import nextApi from 'src/api/nextApi'

interface Props {
    comments: any
}



const Test: NextPage<Props> = ({ comments }) => {

    return (
        <div style={style}>
        </div>
    )
}




const style: CSSProperties = {
    padding: 20,
    backgroundColor: 'var(--dark)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const getServerSideProps: GetServerSideProps<any> = async () => {




    return {
        props: {
        }
    }
}

export default Test