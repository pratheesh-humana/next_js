import REact from "react";
import {useQuery,gql} from "@apolloClient";
import "./CharacterList.css";
import {useCharacters} from "../CustomHooks/useCharacters";

// const CHARACTER_LIST = gql`
//  query {
//      characters{
//         results{
//             id
//             name
//             image
//         }
//      }
//  }
// `;

export default function CharacterList(){

    //calling custom hook
    const {error ,loading , data } = useCharacters();
  
    // const {error , loading , data } =useQuery ( CHARACTER_LIST );

    // console.log({error , loading , data });

    //obj.error
    //obj.loading
    //obj.data

    if(loading ) return <div> Spinner ....</div>
    if(error ) return <div> Something Went Wrong </div>
    
    //render component with data 

    return <div className = "CharacterList">
        {data. characters.results.map((character)=>{
            return (

                <div>
                    <Link to ={`/${character}`}>
                    <img src ={character.image} />
                    <h2>{character.name}</h2>
                    </div>
                    </Link>

            )
        })}

    </div> 
}