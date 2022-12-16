import { Input, Button } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Time = () => {
    const [data, setData] = useState([])
    const [input, setInput] = useState({
        desc: "",
        tag: "",
        start_time: "",
        end_time: ""
    })


    // <<<<<<<<<<< GET DATA >>>>>>>>>>
    // const GetData = async () => {
    //     return (
    //         await axios.get("http://localhost:8080/tracker/show")
    //             .then((res) => {
    //                 setData(res.data.time)
    //                 console.log(res.data.time)
    //             })
    //     )
    // }

    useEffect(() => {
        GetData()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput({
            ...input,
            [name]: value
        })
    }
    // console.log("input", input)

    // handlesubmit
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     return await axios.post("http://localhost:8080/tracker/new", input)

    // }
    // console.log("data", data)


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input type="text" placeholder='desc' name="desc" value={input.desc} onChange={handleChange} />
                <Input type="text" placeholder='tag' name="tag" value={input.tag} onChange={handleChange} />
                <Input type="number" placeholder='start time' name="start_time" value={input.start_time} onChange={handleChange} />
                <Input type="number" placeholder='end time' name="end_time" value={input.end_time} onChange={handleChange} />

                <Button type='submit'>Submit</Button>
            </form>

            {
                data.map((el) => {
                    return (
                        <div key={el._id}>
                            <li>{el.desc}</li>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Time