import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';
import * as ApiServiceProxies from './service-proxies';
import { API_BASE_URL } from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.AuthServiceProxy,
        ApiServiceProxies.BookServiceProxy,
        ApiServiceProxies.CompanyServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.AuthorServiceProxy,
        { 
          provide: API_BASE_URL, 
          useValue: environment.appBaseUrl }
    ]
})

export class ServiceProxyModule { }
