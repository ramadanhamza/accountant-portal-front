import {Client} from './client.model';

export class Rdv {
  public id: number;
  public client = new Client();
  public date: string;
  public affirmation: string;
  public code: string;
  public reponse: string;
}
