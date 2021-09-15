

export const INICIO_REPOSITORI = 'INICIO_REPOSITORI';

export interface IInicioRepository {

    getAll(): Promise<any>;
    saveBaseData(): Promise<any>;
    getFiltrado(query:any): Promise<any>
}
