let field,player;

class Field{
    constructor(cols,rows,containerId) {
        this.cols = cols;
        this.rows = rows;
        this.container = document.querySelector(containerId);
        this.createField();
    }

    createField(){
        let field = [];
        for (let index = 0; index < this.rows; index++) {
            field[index] = [];
            for (let j = 0; j < this.cols; j++) {
                field[index].push(this.createRock())
            }
        }
        this.field = field;
        this.drawField();
        
    }

    createRock() { return Math.floor(Math.random()*5) === 1 ? '@' : '' };
    
    drawField() {
        let template = '';
        for (let index = 0; index < this.rows; index++) {
            template += '<tr>';
            for (let j = 0; j < this.cols; j++) {
                template += `<td>${this.field[index][j]}</td>`

            }
            template += '</tr>';
        }
        this.container.innerHTML = template;

    }
}

class Character{
    constructor(field,x,y,face){
        this.table = field;
        this.x = x;
        this.y = y;
        this.face = face;
        if(!this.setPosition(this.x,this.y)){
            throw Error();
        };
    }

    up(){
        if(this.y > 0){
            this.setPosition(this.x,this.y - 1);
        }
    }

    down(){
        if(this.y + 1 < this.table.rows){
            this.setPosition(this.x,this.y + 1);
        }
    }

    left(){
        if(this.x > 0){
            this.setPosition(this.x - 1,this.y);
        }
    }

    right(){
        if(this.x + 1 < this.table.cols){
            this.setPosition(this.x + 1,this.y);
        }
    }

    setPosition(x,y){
        if(this.table.field[y][x] == ''){
            this.table.field[this.y][this.x] = '';
            this.y = y;
            this.x = x;
            this.table.field[this.y][this.x] = this.face;
            this.table.drawField();
            return true;
        }
        return false;
    }
}

class Player extends Character{
    constructor(field){
        super(field,0,0,'#,#')
    }
}

class Npc extends Character{
    constructor(field){
        let x = Math.floor(Math.random()*field.cols),
            y = Math.floor(Math.random()*field.rows);
        super(field,x,y,'-_-');
        setInterval(function() {
            this.walk();
        }.bind(this), 750);
    }

    walk(){
        let direction = Math.floor(Math.random()*4)+1;
        switch (direction) {
            case 1: this.up(); break;
            case 2: this.down(); break;
            case 3: this.left(); break;
            case 4: this.right(); break;

        }
    }
}

document.addEventListener('keydown', e => {
    ek = e.code;
    if(ek == 'ArrowUp') player.up()
    if(ek == 'ArrowDown') player.down()
    if(ek == 'ArrowLeft') player.left()
    if(ek == 'ArrowRight') player.right()

})

function startField() {
    field = new Field(4,4,'#myTable');
    try{
        player = new Player(field);
    } catch(erro){
        startField();
    }
}

startField();