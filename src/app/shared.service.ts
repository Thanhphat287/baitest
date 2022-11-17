import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl = "http://localhost:5179/api";
  readonly PhotoUrl = "http://localhost:5179/Photos";

  constructor(private http:HttpClient) {

   }
   layDSThucDon():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ThucDon');
   }
   themThucDon(val:any){
    return this.http.post(this.APIUrl+'/ThucDon',val);
   }
   suaThucDon(val:any){
    return this.http.put(this.APIUrl+'/ThucDon',val);
   }
   xoaThucDon(val:any){
    return this.http.delete(this.APIUrl+'/ThucDon/'+val);
   }
   layDSMonAn():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/MonAn');
   }
   themMonAn(val:any){
    return this.http.post(this.APIUrl+'/MonAn',val);
   }
   suaMonAn(val:any){
    return this.http.put(this.APIUrl+'/MonAn',val);
   }
   xoaMonAn(val:any){
    return this.http.delete<any>(this.APIUrl+'/MonAn/'+val);
   }
   taiAnh(val:any){
    return this.http.post(this.APIUrl+'/MonAn/SaveFile',val);
   }
   layDSTenThucDon():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/MonAn/GetAllTenThucDon');
   }

   dangNhap(val:any):Observable<any[]>{
    return this.http.post<any>(this.APIUrl+'/NguoiDung',val);
   }
}
