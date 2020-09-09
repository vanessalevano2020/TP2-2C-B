let posiciones = {
    catA : 1,
    catB : 3,
    mouseC : 2,   

    getGanador: function(){
        
        difA = Math.abs(this.catA - this.mouseC),
        difB = Math.abs(this.catB - this.mouseC);

        if (difA===difB){
            console.log("Mouse C")

            }else if(difA<difB){
                console.log("Cat A")
                
                }else console.log("Cat B")   
            },
    
};

posiciones.getGanador();