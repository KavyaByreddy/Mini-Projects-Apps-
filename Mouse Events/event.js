function changecolor_over(){
    document.getElementById('abc').style.background="red"
 }
 function changecolor_out(){
    
    document.getElementById    ('def').style.background="blue"
    } 
       function changecolor_click (){
       document.getElementById('ghf').style.background="aqua"
    }
    function changecolor_dblclick(){
       document.getElementById('jkl').style.background="blue"
    }
    function changecolor_focus(){
       document.getElementById('mno').style.background="aqua"
    }
    function change_Color() {
      document.getElementById('pqr').style.backgroundColor = "yellow"
  }
  function change_Case() {
      //alert("test")
      let name = document.getElementById('pqr').value;
      //alert(name)
      //document.getElementById('xyz').value = "Rajni"
      document.getElementById('pqr').value = name.toUpperCase()
  }