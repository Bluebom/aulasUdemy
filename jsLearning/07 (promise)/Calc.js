let myVar = 5;

export class myClass{
    constructor(course){
        this.course = course;
        console.log(`Você é aluno na ${this.course}`);
    }

    static sum(a,b) {
        try{
            if(Number.isInteger(a+b)){
                return a + b;
            }else{
                throw Error('Insira dois números inteiros!');
            }
        }catch(e){
            console.log(e);
        }
    }
}

