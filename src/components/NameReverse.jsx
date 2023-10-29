import {reverse} from '../helpers'
function NameReversed({username}) {
    
    return(

        <>
            <p className="name-reversed">Also, {username} backwards is {reverse(username)}</p>
        </>

    )
}
    
 
export default NameReversed