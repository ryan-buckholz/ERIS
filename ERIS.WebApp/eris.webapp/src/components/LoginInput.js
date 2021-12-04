const LoginInput = () => {
    return (
        
        <div class="card col-xl-4 border-0"> 
            <div class="card-body">
                <form action="Home.html">
                    <div class="form-group" >
                        <input type="text" class="form-control" id="inputCalTransID" placeholder="Cal Trans ID"/>
                    </div>
                    <div class="form-group" >
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
        </div>
    )
}



export default LoginInput