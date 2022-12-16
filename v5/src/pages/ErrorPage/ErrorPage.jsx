import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const ErrorPage = (props) => {

    const location = useLocation()

    useEffect( () => {
        console.log(location.state)
    })
    return(
        <div>

            { props.errorMessage !== undefined &&
                <h1>An error has occurred : { props.errorMessage }</h1>
            }

            { location.state !== null && location.state.errorMessage !== undefined &&
                <h1>An error has occurred : { location.state.errorMessage }</h1>
            }


        </div>
    )
}

export default ErrorPage