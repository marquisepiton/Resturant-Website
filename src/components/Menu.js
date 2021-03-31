import React, {Component} from 'react'
import axios from 'axios'


export class Menu extends Component  {
    constructor(props){

        super();

        this.state = {
            menu: ''

        }


    }

    componentDidMount(){

        let apiURL = `http://awesomeincbootcampapi-ianrios529550.codeanyapp.com:3000/public/api/menu/sections`

        let this_ = this

        const axiosData =  axios.get(apiURL)

            .then(function(response){

                console.log('line 15, in cdm axios call ',response.data);
                return response.data
            })
            .catch(function (error) {
                console.log(error);
            })
            console.log(axiosData);

        this.setState({menu: axiosData})
    }

    render() {

       
        return (


            <div>

            </div>




           
        );

        
    }

}
export default Menu