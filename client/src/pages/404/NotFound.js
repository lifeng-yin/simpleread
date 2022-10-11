import img from './404.svg'
import './NotFound.scss'

const NotFound = () => {
    return (
        <div id = 'NotFound'>
            <h1>404 - Page Not Found
                <p>
                    The page you were looking for couldn't be found.
                    <br/> 
                    <a href = '/'>Back to Home</a>
                </p>
            </h1>
            <img src = {img} alt = '404img' className = '404img' ></img>
        </div>
    )
}
export default NotFound