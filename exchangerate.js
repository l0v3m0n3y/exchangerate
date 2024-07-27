class exchangerate{
    constructor(){
        this.api = "https://api.exchangerate-api.com/v4"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","Connection": "Keep-Alive","Content-Type":"application/json; charset=UTF-8"}
    }
    async get_coin(coin){
        let req=await fetch(`${this.api}/latest/${coin}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {exchangerate};