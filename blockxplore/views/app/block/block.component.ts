import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions,Response} from '@angular/http'; 
import {Router} from '@angular/router';
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
 
export class BlockComponent implements OnInit {
  //-------------chart--------------------------------
 //--------------end-chart-----------------------------
 
  private data: any[]; 
  private data2: any[];
  curr=[];
  block=[];
  mydata2;
  current="";
  previous="";
  height;
  len;j;h;blockno;
  mydata;
  blockData=[];
  mytrans: any[];
  type;id;date11;seconds;nanos;UUID;payload;confidence_level;cert;signature
  constructor(private http: Http) 
  { 
     
    this.http.get('src/data/block.json')
           .subscribe((data)=> {
                    this.data = data.json().main; 
            });
    this.http.get('http://169.55.193.150:8050/network/peers')
           .subscribe((data2)=> {
                    this.data2 = data2.json().peers;
            });
    this.http.get('http://169.55.193.150:8050/chain')
          .subscribe((mydata)=>{
                this.mydata=mydata.json();
                this.current=this.mydata.currentBlockHash;
                this.height=this.mydata.height;
                this.previous=this.mydata.previousBlockHash;
          });
          this.h = parseInt(this.height);
        for(var i=1;i<118;i++){
      this.http.get('http://169.55.193.150:8050/chain/blocks/'+i)
          .subscribe((mydata2)=>{
                  this.curr.push(mydata2.json());
                       console.log(this.curr); 
          });
        }
        
        
};
         
block_no(id)
{
                  this.type="";
                  this.id="";
                  this.nanos="";
                  this.seconds="";
                  this.payload="";
                  this.cert="";
                  this.signature="";
 this.blockno=id;
 this.http.get('http://169.55.193.150:8050/chain/blocks/'+id)
          .subscribe((mydata3)=>{
                  this.blockData=(mydata3.json().transactions);
                  this.type=this.blockData[0].type;
                  this.id=this.blockData[0].txid;
                  this.nanos=this.blockData[0].timestamp.nanos;
                  this.seconds=this.blockData[0].timestamp.seconds;
                  this.payload=this.blockData[0].payload;
                  this.cert=this.blockData[0].cert;
                  this.signature=this.blockData[0].signature;
                  
                        
          });
}
  ngOnInit() {
  }

}
