import {Client} from './client.model';

export class Contact {
  public id: number;
  public client = new Client();
  public sujet: string;
  public message: string;
  public code: string;
}
