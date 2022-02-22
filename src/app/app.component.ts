import { Component } from '@angular/core';
import { SrvPagosService } from './services/srv-pagos.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public coleccion!:any[]
  public data:any = 'Tipo de Documento |Descripcion |Fecha de emision |Cantidad de CPE';
  title = 'Cliente';
    constructor(private archivoServices:SrvPagosService){

    }
    descargar(){
      this.archivoServices.AlmacenaData()
                          .subscribe((resp:any)=>{
                            this.coleccion=resp
                            
                            this.coleccion.sort(function (a, b) {
                              // A va primero que B
                              if (a.TipoDocumento < b.TipoDocumento)
                                  return -1;
                              // B va primero que A
                              else if (a.FechaEmision > b.FechaEmision)
                                  return 1;
                              // A y B son iguales
                              else 
                                  return 0;
                          });


                            console.log(this.coleccion);
                            let tipo 
                            for (let numero of this.coleccion!){
                              if(numero.TipoDocumento ===10 ){
                                tipo ='Factura'
                              }else if (numero.TipoDocumento ===20){
                                tipo ='Boleta'

                              }
                              else if (numero.TipoDocumento ===30){
                                tipo ='Nota de Credito'
                                
                              }
                              else if (numero.TipoDocumento ===40){
                                tipo ='Nota de Debito'
                                
                              }
                              this.data = `${this.data} ${numero.TipoDocumento}|${tipo}|${numero.FechaEmision}|${numero.ImporteTotal}|\n`
                            }

                            this.data = `${this.data} Total ${this.coleccion.length}|\n`

                            var element = document.createElement('a');
                            var blob = new Blob([this.data], {
                              type: 'text/xml'
                            });
                            var url = URL.createObjectURL(blob);
                            element.href = url;
                            element.setAttribute('download', 'descarga.xml');
                            document.body.appendChild(element); 
                            element.click(); 
                            
                          })
                   
      
                          
      
                  
    }
}
