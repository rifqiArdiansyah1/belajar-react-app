import { useEffect, useState } from "react"

const DataFetcher = () => {
    const [data, setaData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("https://api.jikan.moe/v4/anime/21");
                if(!response.ok){
                    throw new Error('Network response was not ok')
                }
                const result = await response.json()
                setaData(result)
            } catch (error) {
                console.error('Error fetch data:', error)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    },[]);

    if(loading) {
        return <p>Loading...</p>
    }

    return(
        <div>
           {data ? <p>{JSON.stringify(data)}</p> : <p>No data available</p>}
        </div>
    )
}

export default DataFetcher;
