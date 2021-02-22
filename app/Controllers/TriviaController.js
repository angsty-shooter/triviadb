import { triviaService } from "../Services/TriviaService.js";
import { ProxyState } from "../AppState.js";


function _draw(){
    let questions = ProxyState.questions
}

export default class TriviaController{

    constructor(){
        ProxyState.on("questions", _draw)
        _draw()
    }
}