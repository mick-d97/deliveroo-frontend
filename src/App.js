import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react"; // HOOKS

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://deliveroobackendmd.herokuapp.com/"
        );
        console.log(response.data);
        setData(response.data); //renvoi le tableau json
        setIsLoading(false); //permet d'arreter le chargement une fois le tablea json chargé
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="top">
        <p>Deliveroo</p>
      </div>
      {isLoading ? (
        <p>chargement</p>
      ) : (
        <>
          <div className="body"></div>

          <div className="header">
            <p>{data.restaurant.name}</p>
            <p> {data.categorie} </p>
            <p>{data.restaurant.description}</p>
            <img src={data.restaurant.picture} alt="" />
          </div>
          {data.categories.map((category, index) => {
            return (
              <div className="menuCategory">
                <div className="menu">
                  <h2> {category.name} </h2>
                  <div className="menuCard">
                    <div className="itemMenu">
                      {category.meals.map((meal)=>{
                          return (
                            <div className="cardItem">
                              <h3>{meal.title}</h3>
                              <p>{meal.description}</p>
                              <img style={{width: 250}} src= {meal.picture} alt={meal.title} />
                              <p> {meal.price} </p>
                              
                            </div>
                          )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default App;

// FJJA-4VWP-VQVT-EFLF-PFRB
