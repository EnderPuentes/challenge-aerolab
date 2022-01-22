export default function({ app, $axios }) {

    $axios.onRequest(async (config) => {
      return config
    })
    
    $axios.onError(error => {
  
      if (error.response) {
  
        return error.response.data.error.message
      
      } else if (error.request) {
  
        return Promise.reject('Hubo un problema al intentar conectarse al servicio rest.')
      
      } 

    })
   
  }