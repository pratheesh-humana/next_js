import React from "react" ;
import { useCharacter } from "../CustomHooks/useCharacter";

export default function Character(){
//react router hook to get id 
    const {id} = useParams();

     //const {error , loading , data } = useCharacter(4);
     const {error , loading , data } = useCharacter(id);


     console.log({error , loading , data })

     if(error) return <div>Some thing went wrong</div>
     if (loading ) return <div>Spinner..</div>


      return (
     <div ClassName = "Character">
        <img src = {data.character.image} width={} height={}/>
        <div className="Character-content">
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className ="Character-details">
                {data.character.episode.map(()=>{
                    return (
                        <div>
                            {episode.name} - <b>{episode.name}</b>
                            </div>
                    )
                })}

            </div>
            </div>
       
     )
     </div>
     )
}
