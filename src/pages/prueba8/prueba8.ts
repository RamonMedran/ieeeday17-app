import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {HTTP} from '@ionic-native/http';
import {Storage} from '@ionic/storage';

/**
 * Generated class for the Prueba8Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-prueba8',
  templateUrl: 'prueba8.html',
})
export class Prueba8Page {
  public web="https://www.google.es/maps/place/37°22'57.0\"N+5°59'46.7\"W/@37.382492,-5.9985017";
  descripcion="";
  respuesta='';
  equipo="";
  clave="";
  nMision=8;
  

  constructor(public navCtrl: NavController,private http:HTTP,private storage:Storage, public navParams: NavParams) {
    this.storage.get('validado').then((val)=>{
      if(val==null){
        this.navCtrl.pop();
      }
    });

    this.storage.get('equipo').then((val)=>{
      this.equipo=val;
    });
    this.storage.get('pass').then((val)=>{
      this.clave=val;
    });
  }

  ionViewWillLoad() {
    var prIni;
    var prAct;

    this.storage.get('prueba8def').then((val)=>{
      if(val!=null){
        this.descripcion=val;
      }
    });

    this.storage.get('pruebaIni').then((val)=>{
      prIni=val;
        this.storage.get('pruebaAct').then((val2)=>{
          prAct=val2;


	  this.storage.get('fin').then((val3)=>{
      	    if(val3!=null){
	      this.storage.set('prueba8res',"ok");
              this.storage.set('prueba8Ini',"ok");
      	    }else{
    	      if(prIni<=prAct&&prIni<=8&&8<prAct){
      	        this.storage.set('prueba8Ini',"ok");
      	        this.storage.set('prueba8res',"ok");
    	      }else if(prAct<prIni&&(8<prAct||8>=prIni)){
     	        this.storage.set('prueba8res',"ok");
      	        this.storage.set('prueba8Ini',"ok");
    	      }
	    }

    	    this.storage.get('prueba8Ini').then((val)=>{
      	      if(val==null){
                document.getElementById("inicio").style.display="inline";
              	document.getElementById("contenido").style.display="none";
	      	document.getElementById("desafio").style.display="none";
      	      }else{
                document.getElementById("inicio").style.display="none";
	
		this.storage.get('prueba8res').then((val)=>{
              	  if(val==null){
                    document.getElementById("desafio").style.display="inline";
            	    document.getElementById("contenido").style.display="none";
	    	    document.getElementById("descrReto").innerHTML=this.descripcion;
            	    document.getElementById("error").style.display="none";
       	      	  }else{
                    document.getElementById("contenido").style.display="inline";
		    document.getElementById("desafio").style.display="none";
	    	    document.getElementById("correcto").style.display="none";
              	  }
            	});
      	      }
    	    });
    	  });
        });
      });
  }


  consulta(){
    this.http.get('http://miguelmerelo.es/ieeeday/respuesta.php?respuesta='+this.respuesta+'&equipo='+this.equipo+'&clave='+this.clave+'&prueba='+this.nMision,{},{}).then(data => {
      var status=data.data.split('}')[0].split(':')[1].split("\"")[1];
      if(status.localeCompare("ok")==0){
	this.storage.set('prueba8res',"si");
	this.storage.set('pruebaAct',this.nMision+1+"");

	document.getElementById("desafio").style.display="none";
	document.getElementById("contenido").style.display="inline";
	document.getElementById("correcto").style.display="inline";
      }else if(status.localeCompare("fin")==0){
	this.storage.set('prueba8res',"si");
        this.storage.set('fin',"si");

	document.getElementById("desafio").style.display="none";
	document.getElementById("contenido").style.display="inline";
	document.getElementById("correcto").style.display="inline";
      }else{
        document.getElementById("error").style.display="inline";
      }
    })
    .catch(error => {

       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

     });
  }

  //comienza el desafio
  empezar(){
    this.http.get('http://miguelmerelo.es/ieeeday/iniciar.php?inicio=si&equipo='+this.equipo+'&clave='+this.clave+'&prueba='+this.nMision,{},{}).then(data => {
      var descr=data.data.split('}')[0].split(':')[1].split("\"")[1];
      this.storage.set("prueba8def",descr);
      this.storage.set('prueba8Ini',"si");
      this.descripcion=descr;

      document.getElementById("desafio").style.display="inline";
      document.getElementById("inicio").style.display="none";
      document.getElementById("contenido").style.display="none";
      document.getElementById("descrReto").innerHTML=this.descripcion;
      document.getElementById("error").style.display="none";
    })
    .catch(error => {

       console.log(error.status);
       console.log(error.error); // error message as string
       console.log(error.headers);

       
     });
    
  }

  openURL(url){
    window.open(url,'_system');
  }

}
