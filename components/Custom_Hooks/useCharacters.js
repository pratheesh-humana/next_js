import {useQuery , gql } from "@apollo/client";

const CHARACTER_LIST = gql`
 query {
     characters{
        results{
            id
            name
            image
        }
     }
 }
`;


export const useCharacters = () => {

    const {error , loading , data } =useQuery ( CHARACTER_LIST );

    return {error ,
     loading ,
    data 
    };

}