import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"
import Info from "../Models/Trivia.js";


class TriviaService{
    constructor(){
        this.getInfo()
    }
    
    getInfo(){
        console.log(api)
        api.get('').then(res => {
            console.log(res);
            ProxyState.questions = res.data.results.map(rawInfo => new Info(rawInfo))
        })
    }
}

export const triviaService = new TriviaService