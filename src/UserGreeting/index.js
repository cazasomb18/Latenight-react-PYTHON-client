function UserGreeting = 

  handleLoginSubmit = async () => {
    // e.preventDefault()
    try{
      const loginResponse = await fetch('http://localhost:9000/auth/login/', {
        method: 'POST',
        credentials: 'include', 
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
       if (parsedResponse.success === true) {
        this.setState({
          loggedIn: true,
        })
        console.log("App state: ", this.state)
        console.log("Props: ", this.props)
        console.log(parsedResponse.success);
      }

      // if parsedResponse.success is true, then you know that 
      // parsedResponse.data contains the user information 

      // and bc the login is successful, then you should  
      // invoke this.props.setUserInfo(), passing in the parsedResponse.data 

    }catch(err){
      console.log(err);
      console.error(err);

    }
  }

    handleChange = (e) => {
    e.preventDefault();
    this.setState({

      [e.currentTarget.name]: e.currentTarget.value

    })
  }





{!this.state.loggedIn ? <RegisterControl /> : null}



  {!this.state.loggedIn ?
    <div>
      <form onSubmit={this.handleLoginSubmit}>
        Username: 
        <input type="text" name="userName" placeholder="username" onChange={this.handleChange}/>
        Password: 
        <input type="password" name="password" placeholder="********" onChange={this.handleChange}/>
        <input type="submit" value="Log In!"/>
      </form>
      </div> : null }