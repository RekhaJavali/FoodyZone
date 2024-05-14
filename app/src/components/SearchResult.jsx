import styled from "styled-components";
import {Container, Button, BASE_URL} from "../App";



function SearchResult({data:foods}) {

    console.log(foods);
    return (
        <>
            <FoodCardContainer>
                 <Container>
                    <FoodCards>
                        {foods?.map(({ name, image, text, price })=>( /*optional chaining,  {name, image, text, price}*/ 
                            // return(
                            <FoodCard key={name}>
                                
                                <div className="food_image">
                                    <img src= {BASE_URL+image} alt="food" />
                                </div> 
                                <div className="food_info">
                                    <div className = "info">
                                        <h3>{name}</h3>
                                        <p>{text}</p>
                                    </div>
                                    <Button>${price.toFixed(2)}</Button>
                                </div> 
                            </FoodCard>
                            )
                         )} 
                    </FoodCards>
                </Container> 
            </FoodCardContainer>
        </>
    )
}

export default SearchResult;

const FoodCardContainer = styled.section`

   min-height:calc(100vh - 210px);
    background-image:  url("bg.png");
    background-size: cover;
`;

const FoodCards = styled.section`
    display:flex;
    flex-wrap:wrap;
    column-gap:20px;
    row-gap:32px;
   
    justify-content:center;
    align-items:center;
    padding-top:80px;
`;

const FoodCard = styled.div`
    width: 340px;
    height: 167px;
    flex-shrink: 0;

    display:flex;
   
    border-radius: 20px;
    border: 0.3px solid #98F9FF;

    background: url(<path-to-image>), lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat, radial-gradient(151.92% 127.02% at 15.32% 21.04%, rgba(165, 239, 255, 0.20) 0%, rgba(110, 191, 244, 0.04) 77.08%, rgba(70, 144, 212, 0.00) 100%);

    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.184196472167969px);

    padding:10px;

    .food_info {
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:end;

       h3{
        margin-top:8px;
        font-size:16px;
        font-weight:800;
       } 

       p{
        font-size:12px;
        margin-top:5px;
       }
       button{
        font-size:12px;
       }
    }

    
`;
