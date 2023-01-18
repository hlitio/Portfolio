import './App.css';
import Inicio from './component/inicio'
import About from './component/about';
import Servicios from './component/servicios';
import Habilidades from './component/habilidades';
import Portafolio from './component/portafolio';
import Portafolio_2 from './component/portafolio_dos';
import Contacto from './component/contacto';
import Pie from './component/pie';

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";



const client = new ApolloClient({ uri: "http://127.0.0.1:4000/graphql" });



const QueryPortafolio = ()=>{

  return(
      
    <Query
    query={gql`
      query {
        getUsuarios {
          imagen
          imagen_alt
          titulo
          subtitulo
          enlace
        }
      }
    `}
    >
    {(props) => {
        
      console.log(props)  
      if (props.loading) return <p>Cargando...</p>;
      return props.data.getUsuarios.map((resp) => {
        return (
                <div className="proyecto">
                    <div className="overlay"></div>
                    
                    <img src={resp.imagen}alt={resp.imagen_alt}/>
                    <div className="info">
                        <h4>{resp.titulo}</h4>
                        <p>{resp.subtitulo}</p>
                    </div>
                </div>
        )
      });
    }}
  </Query>
  )
}




function App() {
 
  return (
    <>
    <ApolloProvider client={client}>
      <Inicio/>
      <About/>
      <Servicios/>
      <Habilidades/>      
      
      <Portafolio Info={QueryPortafolio} />

      <Portafolio_2/>
      <Contacto/>
      <Pie/>
    </ApolloProvider>
    </>
  );
}

export default App;
