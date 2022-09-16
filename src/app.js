import { LightningElement } from "lwc";

export default class App extends LightningElement {
    visivel = true;
    
    Empresa = "Soulcode";
    CNPJ = 18593000125
    Endereco = "Av. do Camabras, 125 Campinas/SP"


    onclick(){
      this.visivel = false;
    }
}