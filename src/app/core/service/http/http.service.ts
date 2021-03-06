import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from '../../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public http0;



  constructor(private http:HttpClient) { }
  httpGet(nexturl){
   return this.http.get(environment.baseUrl+'/'+nexturl)
  }
  httpPost(nexturl,body){
    return this.http.post(environment.baseUrl+'/'+nexturl,body)
   }
   httpPasswordUpdate(nexturl,token,body){
     var httpOption={
       headers: new HttpHeaders({
         'Content-Type': 'application/x-www-form-urlencoded',
       })
     };
     return this.http.post(environment.baseUrl+"/"+nexturl,this.getFormUrlEncoded(body),httpOption)
   }
 
  httpColorNote(nexturl,body,token){
    var httpOptions={
      headers:new HttpHeaders({
       'Content-Type': 'application/json',
      //  'Authorization':token
      })
    };
    return this.http.post(environment.baseUrl+"/"+nexturl,body,httpOptions)
  }
  httpDeleteNote(nextUrl,body,token){
    var httpOptions={
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization':token
    })
    
    };
    return this.http.post(environment.baseUrl+'/'+nextUrl, body, httpOptions)
    }
    httpArchiveNote(nextUrl,body,token){
      var httpOptions={
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization':token
      })
      
      };
      return this.http.post(environment.baseUrl+'/'+nextUrl, body, httpOptions)
      }
      httpUpdateNote(nexturl,body,token){
        var httpOptions={
          headers:new HttpHeaders({
           'Content-Type': 'application/x-www-form-urlencoded',
          //  'Authorization':token
          })
        };
        return this.http.post(environment.baseUrl+"/"+nexturl,this.getFormUrlEncoded(body),httpOptions)
      }
      
      httpPostLable(nexturl,body,token){
        var httpOptions={
          headers:new HttpHeaders({
           'Content-Type': 'application/json',
          //  'Authorization':token
          })
        };
        return this.http.post(environment.baseUrl+"/"+nexturl,body,httpOptions)
      }
      httpAddImage(nexturl,body,token){
        console.log(token);
        var httpOptions={
          headers:new HttpHeaders({
           
          //  'Authorization':token
          })
        };
        return this.http.post(environment.baseUrl+"/"+nexturl,body,httpOptions)
      }
      httpPostdeleteForever(nexturl,body,token){
        var httpOptions={
          headers:new HttpHeaders({
           'Content-Type': 'application/json',
          //  'Authorization':token
          })
        };
        return this.http.post(environment.baseUrl+"/"+nexturl,body,httpOptions)
      }

      httpDeletelabel(nexturl,body,token){
        var httpOptions={
          headers:new HttpHeaders({
           'Content-Type': 'application/json',
          //  'Authorization':token
          })
        };
        return this.http.post(environment.baseUrl+"/"+nexturl,body,httpOptions)
      }


      public getNoteJson(name,token){
        var httpheaders = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Authorization': token
          })
        };
        return this.http.get(environment.baseUrl+ "/" + name,httpheaders);
      }
      
      public labelDeleteService(name){
        
          return this.http.delete(environment.baseUrl+"/"+name);
        }
     
       public postNotes(name, body, token){  //Service file pr posting delete function and the color hash codes of notes
          var httpheaders = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              // 'Authorization': token
            })
          };
        
          return this.http.post(environment.baseUrl + "/" + name, body, httpheaders);
        }

        httpAddReminder(nexturl,token,body){
          console.log(token);
          var httpOptions={
            headers:new HttpHeaders({
             
            //  'Authorization':token
            })
          };
          return this.http.post(environment.baseUrl+"/"+nexturl,body,httpOptions)
        }
        
       public httpGetReminder(nexturl,token){
          console.log(token);
          var httpOptions={
            headers:new HttpHeaders({
             
            //  'Authorization':token
            })
          };
          return this.http.get(environment.baseUrl+"/"+nexturl,httpOptions)
        }
        // public httpGetNote(name,token){
        //   var httpheaders = {
        //     headers: new HttpHeaders({
        //       'Content-Type': 'application/json',
        //       'Authorization': token
        //     })
        //   };
        //   return this.http.get(environment.baseUrl+ "/" + name,httpheaders);
        // }
        httpPostArchive(nexturl,body,token){
          var httpOptions={
            headers:new HttpHeaders({
             'Content-Type': 'application/json',
            //  'Authorization':token
            })
          };
          return this.http.post(environment.baseUrl+"/"+nexturl,body,httpOptions)
        }
        httpPostUserList(nexturl,body){
          var httpOptions={
            headers:new HttpHeaders({
              'Content-Type': 'application/json'

          })
          
        }
        return this.http.post(environment.baseUrl+"/"+nexturl,body,httpOptions)
       
      
      }
      



//---------------------------------------------------------------


public httpPosts(url,body,token){
  
  var httpAuthOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': token
    })
  };
  return this.http.post(url, body, httpAuthOptions2);/**passing the input & calling the  getFormUrlEncoded()*/
}
public httpget(url,token){
  var httpAuthOptions3 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': token
    })

  };
  return this.http.get(url, httpAuthOptions3);

}
public httpGetNote(name,token){
  var httpheaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': token
    })
  };
  return this.http.get(environment.baseUrl+ "/" + name,httpheaders);
}
httpGetNotes(nexturl,token){
  var httpOptions={
  headers:new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Authorization':token
   })
 };
 return this.http.get(environment.baseUrl+"/"+nexturl,httpOptions)
 
}
httpAddNote(nexturl,body,token){
  var httpOptions={
    headers:new HttpHeaders({
     'Content-Type': 'application/x-www-form-urlencoded',
    //  'Authorization':token
    })
  };
  return this.http.post(nexturl,this.getFormUrlEncoded(body),httpOptions)
}

public httppostpassword(url,body,token){
var httpAuthOptions1 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Authorization': token
  })
};
return this.http.post(url, this.getFormUrlEncoded(body),httpAuthOptions1)/**passing the input & calling the  getFormUrlEncoded()*/
}
getFormUrlEncoded(toConvert) {/**a method that encodes the token*/
  const formBody = [];
  for (const property in toConvert) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(toConvert[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&');
}
public httpImage(url,body,token){
var http={
  headers:new HttpHeaders({
   
  //  'Authorization':token
  })
};
return this.http.post(url,body,http)
}
delete(url){
  this.http0 = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  return this.http.delete(url,this.http0);
}
get(url){
  return this.http.get(url)
}
}
        

