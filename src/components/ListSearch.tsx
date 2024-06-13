import React, { FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import type { ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { LIST_SEARCH_PARAM_KEY  } from '../constants'
// add ?keyword=hello
// add ?keyword=hello&page=2

const { Search } = Input
const ListSearch: FC = () => {
    const nav = useNavigate()
    const { pathname } = useLocation()
    const [value, setValue] = useState('')
    const [searchParams] = useSearchParams()
    useEffect(()=>{
        const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
        setValue(curVal)
    }, [searchParams])
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }
    function handleSearch(value: string) {
        nav({
            pathname,
            search: `${LIST_SEARCH_PARAM_KEY}=${value}`
        })
    }
    return <Search size="large" allowClear={true} placeholder='input' value={value} onChange={handleChange} onSearch={handleSearch} style={{ width: '260px' }}/>
}

export default ListSearch