# exchangerate
JavaScript library for exchangerate-api.com
# main
```js
async function main(){
    const {exchangerate} = require('./exchangerate');
    const rate= new exchangerate();
    let req=await rate.get_coin("USD")
    console.log(req)
}
main()
```
