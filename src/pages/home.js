import Header from "../components/header.js"
import Footer from "../components/footer.js"
import MenuBest from "../components/menubest.js"


export default function Home() {

    const appetizer = [
        {
            name:"Salmon Crouquettes",
            image:"https://i.pinimg.com/originals/73/7a/2e/737a2ea499df3a7c50fafc7fd31120ee.jpg",
            description:"Experience our lightly breaded Salmon Crouquette",
        
        }
    ]

    const entree = [        
       {
            name:"Southern Fried Chicken",
            image:"http://doreenmcgettigan.com/wp-content/uploads/2017/05/Food-Fried-Chicken-Collard-Greens.jpg",
            description:"Try Our Crispy and Delicious Golden Fried chicken",
            
        }
    ]

    const dessert = [
        {
            name:"Red Velvet",
            image:"https://www.wishacupcake.com/wp-content/uploads/2016/12/red-velvet-cake-cream-cheese-cake-705x1024.jpg",
            description:"Enjoy Our Rich Real Vanilla Doubled Layered Cake Topped With Cream Chesse Frosting"
        }
    ]


    return(
        <>  
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">


                <h2 class="animate__animated animate__heartBeat">Welcome</h2>


                 <h3>Appetizer</h3>
                 {appetizer.map((item) =>{
                     return <MenuBest name={item.name} description={item.description} image={item.image}></MenuBest>;
                 })}

                 <h3>Entree</h3>
                 {entree.map((dish) =>{
                     return <MenuBest name={dish.name} description={dish.description} image={dish.image}></MenuBest>;
                 })}
                 <h3>Dessert</h3>
                 {dessert.map((sweet) =>{
                     return <MenuBest name={sweet.name} description={sweet.description} image={sweet.image}></MenuBest>;
                 })}
                 
               
                </div>
            </div>
        </div>
                         
                         
        <Footer></Footer>
        </>
    )
}