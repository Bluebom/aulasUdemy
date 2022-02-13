class FormatData{
    constructor(date){
        this.date = date;
        if(this.valida()){
            console.log(this.transform());
        }else{
            throw Error('Formato de data inválido');
        }
    }
    valida(){
        return (/\d{2}\/\d{2}\/\d{3}/).test(this.date);
    }
    transform(){
        return this.date.replace(/(\d{2})\/(\d{2})\/(\d{4})/,"$3-$2-$1");
    }
}

try{
    new FormatData('21-06-1999');
}catch(e){
    console.log(e);
    new FormatData('21/06/1999');
}