import "../App.css"

export function FoodItem () {
    return (
        <>
            <div className="fooditem">
                <img className="foodimage" src = "Ellipse 1.png"/>
                <div className="fooddata">
                    <h3>Boiled Eggs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.
                         Odio elementum in neque cras eget est. </p>
                    
                </div>
                <div className="foodprice"> $10.00</div>
            </div>
        </>

    )
}

// export FoodItem