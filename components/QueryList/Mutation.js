import React from "react";
import { gql ,useMutation} from "@apollo/client";

const CREATE_PATIENT = gql`
mutation CreatePatient($name:String!,$quantityPerUnit:Int!){
    createProduct(record:{
        name:$name,
        quantityPerUnit:$quantityPerUnit
    })
    {
        record{
            name
        }
    }
}`

export default function Mutation(){
    const [createPatient,{data,loading,error}] = useMutation(CREATE_PATIENT ,{
        variable:{
            name:"xyz",
            quantityPerUnit:4
        }
    })
    return(
        <div><button onClick={createPatient()}></button></div>
    )
}