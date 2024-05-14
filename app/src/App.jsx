import { useState, useEffect } from 'react'
import styled from "styled-components";
// import { createGlobalStyle } from 'styled-components'



import './App.css'
// import { Navigator } from './components/Navigator';
// import BodySection from "./components/BodySection"
import SearchResult from './components/SearchResult';

export const BASE_URL = "http://localhost:9000";

function App() {
const [data, setData] =useState(null);
const [error, setError] = useState(false);
const [loading, setLoading] =useState(false); 

const [filteredData, setFilteredData] = useState(null);
const [selectedbtn, setSelectedbtn] = useState("all");
//   {
//   name:"",
//   text: "",
//   image:"",
//   price:""
// });


  useEffect( ()=>{
   
        const foodFetch = async ()=> {
          setLoading(true);
          try{
            const response = await fetch(BASE_URL);
            // console.log(response);
            const jsonres = await response.json();
            console.log(jsonres);
            
            setData(jsonres);
            setFilteredData(jsonres);
            setLoading(flase);
            
          }
      catch(err){
        // console.log(err);
        setError("Unable to fetch the data");
        // console.log(error);
    }
   
  }

  foodFetch();

}, []);

//function to capture the searched food item form input
const searchFood = (e)=>{
  const searchval = e.target.value;
  console.log(searchval);

  if(searchval == ""){
    setFilteredData(null);
  }

  const filter = data?.filter((food)=> 
  food.name.toLowerCase().includes(searchval.toLowerCase())
  );
  console.log(filter);
  setFilteredData(filter);
};

//show food for sleected btn
const filterFood =(type)=>{
  if(type ==="all"){
    setFilteredData(data);
    setSelectedbtn("all");
    return;
  }

  const filter = data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
  );
  setFilteredData(filter);
  setSelectedbtn(type);

};

//avoid multiple buttons using single map
const btns = [
  {
    name:"All",
    type:"all"
  },
  {
    name:"Breakfast",
    type:"breakfast"
  },
  {
    name:"Lunch",
    type:"lunch"
  },
  {
    name:"Dinner",
    type:"dinner"
  }
]

// if(error) return <div>{error}</div>;
// if(loading) return <div>loading....</div>;

// console.log(data);

 
  return (
    <>
   
        <Container>
          <TopContainer>
            <div className='logo'>
              <img src = "Foody Zone.svg" alt = "foodyzone" />
            </div>
            <div className='search'>
              <input onChange = {searchFood} placeholder = "Search Food..." />
            </div>
          </TopContainer>

          <FilterContainer>

            {btns.map((btn)=>
              <Button isSelected = {selectedbtn=== btn.type}onClick = {()=>filterFood(btn.type)}>{btn.name}</Button>
            )}
            {/* <Button onClick = {()=>filterFood("all")}>All</Button>
            <Button onClick = {()=>filterFood("breakfast")}>Breakfast</Button>
            <Button onClick = {()=>filterFood("lunch")}>Lunch</Button>
            <Button onClick = {()=>filterFood("dinner")}>Dinner</Button> */}
          </FilterContainer>
       </Container> 

       <SearchResult  data = {filteredData}/>
    
    </>
  )
}

export default App;

export const Container = styled.div`
    margin:0 auto;
    max-width:1920px;
`;

const TopContainer = styled.section`
    
    display: flex;
    justify-content:space-between;
    align-items:center;
    height:140px;
    padding: 16px;

    .search {
      input{
        background-color: transparent;
        padding:0 10px;
        border-radius:5px;
        border: 1px solid #FF0909;
        color:white;
        height:40px;
        font-size:16px;
        &::placeholder {
          color:white;
        }
      }
    }

    @media( 0 < width < 600px ){
      flex-direction:column;
      height:120px;
    }

`

const FilterContainer = styled.section`

  display:flex;
  gap:12px;
  justify-content:center;
  padding-bottom:40px;
  `;

export const Button = styled.button`
    background-color: ${({isSelected}) => (isSelected? "#f22f2f" : "#FF4343" )};
    outline: ${({isSelected})=> (isSelected? "white": "#FF4343" )}
    color:white;
    padding: 6px 12px;
    border-radius: 5px;
    border:none;
    text-align:center;
    font-size:16px;
    cursor:pointer;
    &:hover {
      background-color:#f22f2f;
      outline:white;
    }
  `;

  

