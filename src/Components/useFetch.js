import React, {useState, useEffect} from 'react'

export const useFetch = (url) => {

    const [result, setResult] = useState({loading:true, data:null})

    useEffect(() => {
        getData(url)
    }, [url])

    async function getData(url){
        try{
            setResult({ loading: true, data: null })
            const resp = await fetch(url)
            const data = await resp.json()
            setResult({ loading: false, data })
        } catch(error){
            console.log(error);
        }
    }


  return result;
}
