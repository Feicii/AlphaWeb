import {lastValueFrom} from 'rxjs';
import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductCreateCommand} from '../actions/product.action';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private http = inject(HttpClient);

  create(command: ProductCreateCommand) {
    return lastValueFrom(
      this.http.post<void>('/api/project', command)
    );
  }
}


