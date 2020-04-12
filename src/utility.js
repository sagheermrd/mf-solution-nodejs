
const AlphaRegx = /[^a-zA-Z'\s]+/;
const Increment = 1;
const MaxItemsReturn=3;
export const RepeatedWords = input => {
        if(typeof(input)!=='string'){
            return []
        }
        if(!input){
            return  [];
        }
        const cleanString=input.replace(AlphaRegx,'');
        const wordsArray=cleanString.toLocaleLowerCase().split(' ');
        const repeatedWords=new Map();

        for (let index = 0; index < wordsArray.length; index++) { 
            if(wordsArray[index].trim()==='')
                continue;

             if(repeatedWords.has(wordsArray[index])){
                 let wordsCount=repeatedWords.get(wordsArray[index]);
                 repeatedWords.set(wordsArray[index],wordsCount+Increment);
             }else
             repeatedWords.set(wordsArray[index],Increment);    
        }

        var filterd = new Map([...repeatedWords.entries()].sort((x,y)=>{
            
            if(x[1]===y[1])
            {
                if (x[0] > y[0]) return 1;
	            if (x[0] < y[0]) return -1;
            }else{
                if (x[1] > y[1]) return -1;
                if (x[1] < y[1]) return 1;
            }
            
        }));
        let mapToArray=Array.from(filterd.keys());
        return mapToArray.length>MaxItemsReturn?mapToArray.slice(0,MaxItemsReturn):mapToArray;
    }
