"use server"

export async function fetchDogs(numberOfDogs){
    try {
        const response = await fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
        if(!response.ok){
            throw new Error("Network Failed to fetch")
        }
        const data= await response.json()
        return data.message
    } catch (error) {
        console.error(error);
        return []
    }
}