import React, {Component} from 'react';

class Formulario extends Component {

    constructor(props){
        super(props)

        this.state = {
            nombre: '',
            correo: '',
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this);
        this.cambiarCorreo = this.cambiarCorreo.bind(this);
        this.cambiarFecha = this.cambiarFecha.bind(this);
    }

    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarFecha(){
        this.setState({
            fecha: new Date()
        })
    }

    cambiarCorreo(e){
        this.setState({
            correo: e.target.value
        })
    }

    render(){
        return (
            <>
                <div className="ed-grid">
                    <div className="span-m-3">
                        <h1>Formulario {this.props.name}</h1>
                        <h4>{ Math.ceil(this.state.fecha/1000) }</h4>
                        <form id="elemento">
                            <div className="ed-container">
                                <div className="ed-item l-40 form__item">
                                    <label>Nombre de usuario</label>
                                    <input type="text" onChange={this.cambiarNombre} />
                                </div>
                                <div className="ed-item l-40 form__item">
                                    <label>Correo</label>
                                    <input type="email" onChange={this.cambiarCorreo} />
                                </div>
                            </div>
                        </form>
                        <div>
                            <h2>{ `Hola ${this.state.nombre}`}</h2>
                            <p>{ `Tu correo es: ${this.state.correo}` }</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        //let elemento = document.getElementById('elemento');
        this.intervaloFecha = setInterval(() => {
                this.cambiarFecha()
                console.log(new Date());
            }, 1000);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("------------");
        console.log(prevProps);
        console.log(prevState);
        console.log("------------");
    }

    componentWillUnmount(){
        clearInterval(this.intervaloFecha);
    }
}

export default Formulario