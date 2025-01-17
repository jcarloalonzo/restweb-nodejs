import { log } from "console";
import express from "express";
import path from "path";




interface Options{
  port: number;
  public_path? : string;
}




export class Server {
 

  private app = express();
  private readonly port: number;
  private readonly publicPath : string;

  constructor(options:Options) {

    const {port,public_path= 'public'} = options;
    this.port= port;
    this.publicPath=public_path;

    
  }


  async start() {


    // * Middlewares  ->  Son funciones que se ejecutan en todo momento que pase por una ruta.


    // * public folders


    this.app.use(express.static('public'));
    console.log("Server running");





this.app.get('*',(req,res)=>{
  
    
    const indexPath = path.join(__dirname+'../../../public/index.html');
    res.sendFile(indexPath);
});









    this.app.listen(3000, () => {
      console.log(`Server running on port ${3000}`);
    });
  }
}
