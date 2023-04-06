import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
query GetCharacter($id :ID!){
    character (id : $ID){
        name
        id
        image
       episode {
        name 
        episode 
      }
     }
  }
`;

export const useCharacter = (id)=>{
 
    const {error , loading , data } = useQuery(GET_CHARACTER ,{
        variable : {
            id,
        },
    });

    return {
        error,
        loading ,
        data
    };
}