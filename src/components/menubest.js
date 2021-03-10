
export default function MenuBest(props) {
    return(
        <div className="row menu-best">

            <div className="col-sm-4">
                <img src={props.image} alt={props.name}/>

            </div>
            <div className="col-sm-8">
                <h4>{props.name}</h4>
                <p>
                    {props.description}
                </p>

                <button className="call-to-action">Select Me</button>


            </div>
        </div>
    )
    
    }
