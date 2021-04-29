import {Client} from './client.model';

export class Contact {
  public client = new Client();
  public sujet: string;
  public message: string;
  public code: string;
}
