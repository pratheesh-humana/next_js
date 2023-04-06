import React , {useState } from "react ";
import {gql ,useLazyQuery } from "@apollo/client";

const GET_CHARACTER_SEARCH = gql`
query GetCharacterSearch($name:String!){
    characters(filter:{
        name:"xyz"
    }){
        results{
            location{
                name
            }
        }
    }
}
`

export default function Search(){

    //useState hook 
    const [name,setName] = useState("");

    const [getSearchResult,{loading,error,data,called}] = useLazyQuery(
        GET_CHARACTER_SEARCH,
        {
            variables:{
                name,
            },
        }

    );

    return (
        <div>
            <input value ={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick ={()=>getSearchResult()}>Search</button>
        </div>
    )
}