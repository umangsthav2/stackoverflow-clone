export default function Register(){
    return(
        <>
        <form>
            Name:<input type="text" paceholder="Enter your name"/>
            Email:<input type="email" placeholder="Enter your email"/>
            Password:<input type="password" placeholder="Enter your password"/>
            <button type="submit">Register</button>
            <button type="reset">Reset</button>
            < button type="button">login</button>

        </form>
        </>
    );
}