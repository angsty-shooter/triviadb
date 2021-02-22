import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"
import Info from "../Models/Trivia.js";


class TriviaService{
    constructor(){
        this.getInfo()
    }
    
    getInfo(){
        api.get('').then(res => {
            //console.log(res);
            ProxyState.questions = res.data.results.map(rawInfo => new Info(rawInfo))
            console.log(ProxyState.questions)
        })
    }
}

export const triviaService = new TriviaService