// a. Perceba que alguns números estão fora do padrão. Retorne o objetos com a
// formatação correta. Ex: (092) 9999-9999
// b. Retorne os nomes dos cliente todos maiúsculos. 

var data = [
    {
         "nome": "Adriano",
         "sobrenome": "Lira",
        "telefone": [
    {
        "ddd": "92",
        "numero": "994222403"
     },
     {
        "ddd": "92",
        "numero": "994222403"
     }
     ]
     },
    ]
var data2 =[
    {
        "nome": "carlos",
        "sobrenome": "Castro",
        "telefone": [
     {
        "ddd": "92",
        "numero": "992808713"
     },
     {
        "ddd": "92",
     "numero": "93145592"
     }
     ]
     },
     ] 
    
     for (var i = 0; i < data.length; i++) {
        data[i].nome ="ADRIANO";
        data[i].sobrenome ="LIRA";
    }
        for (var i = 0; i < data2.length; i++){
        data2[i].nome = "CARLOS";
        data2[i].sobrenome ="CASTRO";
        if(data2[i].numero == "93145592"){
         data2[i].numero = "993145592"}
            
    }
        
        
        console.log(data,data2)
     
