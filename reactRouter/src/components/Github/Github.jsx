import React, { useEffect , useState} from 'react'

function Github() {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary').then(res=>res.json()).then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <div className=' text-center m-4 bg-gray-600 text-white text-3xl'>Github followers : {data.followers}</div>
    )
}

export default Github
