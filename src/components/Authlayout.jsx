function AuthLayout({ children }) {
    return (
        <div className="h-full flex justify-center items-center">
           <h2>Login</h2>
           <input placeholder="Username"/>
           <input placeholder="Password"/>
           <button>Login</button>
        </div>
    )
}

export default AuthLayout;
