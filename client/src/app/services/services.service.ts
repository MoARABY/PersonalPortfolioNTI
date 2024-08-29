import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private HomeApiUrl = 'http://localhost:8000/api/v1/';
  private ProjectsApiUrl = 'http://localhost:8000/api/v1/projects';
  private ServicesApiUrl = 'http://localhost:8000/api/v1/services';
  private ContactsApiUrl = 'http://localhost:8000/api/v1/contacts';

  constructor(private _HttpClient: HttpClient) { }

  // home ---------------------------------------------------------------------

  getHome(): Observable<any> {
    return this._HttpClient.get<any>(this.HomeApiUrl);
  }

  // projects -----------------------------------------------------------------

  addProject(formData: FormData): Observable<any> {
  const url = `${this.ProjectsApiUrl}/admin`;
    return this._HttpClient.post<any>(url, formData);
  }
  deleteProject(projectId: string): Observable<any> {
  const url = `${this.ProjectsApiUrl}/${projectId}/admin`;
  return this._HttpClient.delete<any>(url);
}
  updateProject(projectId: string, formData: FormData): Observable<any> {
  const url = `${this.ProjectsApiUrl}/${projectId}/admin`;
  return this._HttpClient.put<any>(url, formData);
}


// services -----------------------------------------------------------------

addservice(formData: FormData): Observable<any> {
const url = `${this.ServicesApiUrl}/admin`;
  return this._HttpClient.post<any>(this.ServicesApiUrl, formData);
}
deleteService(serviceId: string): Observable<any> {
const url = `${this.ServicesApiUrl}/${serviceId}/admin`;
return this._HttpClient.delete<any>(url);
}
updateService(serviceId: string, formData: FormData): Observable<any> {
const url = `${this.ServicesApiUrl}/${serviceId}/admin`;
return this._HttpClient.put<any>(url, formData);
}

// contacts -----------------------------------------------------------------
sendContact(formData: FormData): Observable<any> {
  return this._HttpClient.post<any>(this.ContactsApiUrl, formData);
  }
deleteContact(contactId: string): Observable<any> {
  const url = `${this.ContactsApiUrl}/${contactId}/admin`;
  return this._HttpClient.delete<any>(url);
  }

loginAdmin(data: any): Observable<any> {
  return this._HttpClient.post<any>("http://localhost:8000/secret-path-API", data);
  }
}
