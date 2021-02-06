import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiServerUrl = '';

    constructor(private http: HttpClient) {} 
    
    //Fetch list of all employees
    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.apiServerUrl}/employee/all`);
    }

    // Adds a single employee to the database
    public addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(`${this.apiServerUrl}/employee/add`,employee);
    }
}