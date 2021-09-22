import React, { Component } from 'react'
import './App.css'

class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            form: {
                name: '',
                email: '',
                password: '',
                sex: 'masculino'
            }
        }

        this.resgiter = this.resgiter.bind(this)
        this.dataForm = this.dataForm.bind(this)
        
      
    }

    dataForm(event) {
        
        let form = this.state.form
        let name = event.target.name
        let value = event.target.value
        form[name] = value
        this.setState({form: form})
        console.log(this.state.form)
    }

    resgiter(event){
        const { name, email, password, sex } = this.state.form
        if(name !== '' && email !== '' && password !== '') {

            alert(`Name: ${name} \nEmail: ${email} \nPassword: ${password} \nSex: ${sex}`)
        } else {
            alert('Please fill in all required fields.')
        }
        //the page dont reload
        event.preventDefault()
    }

    render(){
        return(
            <div className="App">
                    <form onSubmit={this.resgiter}>
                        <div className="form-container-label">
                            <label>Name:</label>
                            <input 
                                type="text" name="name" value={this.state.form.name}
                                onChange={this.dataForm}    
                            />
                        </div>

                        <div className="form-container-label">
                            <label>Email:</label>
                            <input 
                                type="email" name="email" value={this.state.form.email}
                                onChange={this.dataForm}    
                            />
                        </div>

                        <div className="form-container-label">
                            <label>Password:</label>
                            <input 
                                type="password" name="password" value={this.state.form.password}
                                onChange={this.dataForm}    
                            />
                        </div>

                        <div className="form-container-label">
                            <label>Sex:</label>
                            <select 
                                name="sex" value={this.state.form.sex}
                                className="form-select"
                                onChange={this.dataForm}
                            >
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                        </div>
                        
                        
                        <button type="submit" className="form-buttom">Resgiter</button>
                    </form>
            </div>
        );
    }
}

export default App