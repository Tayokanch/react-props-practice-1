function NameLength ({username}){

    return(
        <>
            <p className="name-length">Did you know that {username} is {username.length} characters long?</p>
        </>
    )
}

export default NameLength