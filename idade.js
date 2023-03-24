function verificar() {
   var data = new Date() //Pega da Horario, data ou ano do seu pc
   var ano = data.getFullYear() //Utilizando a variavel acima, retira os dados especificos (Ano, Data ou Hora)

   var nasc = document.getElementById('nasc') //Detecta as duas tags para uso futuro (Valor digitado )
   var res = document.getElementById('res')   //Detecta as duas tags para uso futuro (Resultado do valor)

   if (nasc.value.length == 0 || Number(nasc.value) >= ano){
      window.alert('[ERRO!] Verifique os dados e tente novamente')  //Mensagem caso o usuario digite as credencias erradas


   } else {
      var gender = document.getElementsByName('gender')
      var idade = ano - Number(nasc.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if (gender[0].checked) {
       genero = 'Homem'
         if (idade >= 0 && idade <= 14) {
        //Kiansa
         img.setAttribute('src', 'menino.png')
       } else if (idade < 18) {
            //Adolescente 
         img.setAttribute('src', 'adolescenteM.png')
       } else if (idade < 50) {
                //Adulto
              img.setAttribute('src', 'adulto.png')  
       } else if (idade < 90) {
                //Idoso
              img.setAttribute('src', 'idoso.png')
       } else {
        img.setAttribute('src', 'morte.png')

       }
    


   } else if (gender[1].checked) {
      genero = 'Mulher'
      if(idade >= 0 && idade <= 14) {
        //Kiansa
        img.setAttribute('src', 'menina.png')
       
        } else if (idade < 18) {
            //Adolescente 
            img.setAttribute('src', 'adolescenteF.png')
        } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulta.png')
        } else if (idade < 90) {
                //Idoso
                img.setAttribute('src', 'idosa.png')
        } else  {
        //Morte
        img.setAttribute('src', 'morte.png')
       }
   }  
res.style.textAlign = 'center'
res.innerHTML = `Detectamos ${genero} com ${idade} anos`
res.appendChild(img)

} 
}
