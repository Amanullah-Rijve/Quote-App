export const getQuote = async()=>{
    const apiKey = "6gkUs/NsCBXDVgk8Qh3hAQ==RgUJv39vmTEcy8P2"

    const response = await fetch("https://api.api-ninjas.com/v1/quotes",{
        method: "GET",
        headers:{
            'X-Api-Key' : apiKey,
            'content-type':'application/json'

        }
    })
    return await response.json()
}