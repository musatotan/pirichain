import {create} from "apisauce";
import {Enviroment} from './enviroment';

const apiClient = create({
    baseURL: Enviroment.SERVER_URL
});

export default apiClient;