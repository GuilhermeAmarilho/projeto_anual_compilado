const control = document.querySelector('div.control');
const game = document.querySelector('div.game');
const espec = document.querySelector('div.espec');
const bloco = document.querySelector('div.bloco');
control.addEventListener('click',function(e){
    if	(e.target.className=="btn btn-primary btn-sm pronto"){
		trabalho(document.querySelector('button.btn-success').innerText);
	}
	if  (e.target.type=='button'){
        if  (document.getElementsByClassName("btn btn-success btn-sm")[0]==undefined){
            e.target.className="btn btn-success btn-sm";
        }
        else{
            document.getElementsByClassName("btn btn-success btn-sm")[0].className='btn btn-default btn-sm';
            e.target.className="btn btn-success btn-sm";
        }
    }
});
function criar(pai,filho,classe,conteudo){//pai ja tem que ser uma variavel, filho é apenas o que será.
    if(conteudo==undefined){conteudo=''}
    if(classe==undefined){classe=''}
    f=document.createElement(filho);
    f.setAttribute('class',classe);
    f.innerText=conteudo;
    pai.appendChild(f);
}
function remove(a){
	while	(a.children.length>0){
		a.removeChild(a.children[a.children.length-1]);
	}
}
function trabalho(a){
	remove(control);
	nomes=['Velocidade Final','Tempo','Aceleração'];
	variantes=[];
	switch (a){
		case "Velocidade Final":variantes=["Tempo","Aceleração"];
		case "Tempo":variantes=["Velocidade Final","Aceleração"];
		case "Aceleração":  variantes=["Velocidade Final","Tempo"];
	}
	control.style.height=70+'px';
	control.appendChild(document.createElement('br'));
	criar(control,'span','sp1',(variantes[0].charAt(0)+' '));
	control.appendChild(document.createElement('input'));
	criar(control,'span','sp1',(variantes[1].charAt(0)+' '));	
	control.appendChild(document.createElement('input'));
	criar(control,'button','btn btn-primary btn-sm pronto2','pronto?');
	but= document.querySelector('button.pronto2');
	but.onclick=function(){
		if((document.querySelectorAll('input')[0].value!="")&&(document.querySelectorAll('input')[1].value!="")){
			v=[document.querySelectorAll('input')[0].value,document.querySelectorAll('input')[1].value];
			control.style.height=166+'px';	
			remove(control);
		}
	}
}

function trabalho(a){
	remove(control);
	nomes=['Velocidade Final','Tempo','Aceleração'];
	variantes=[];
	switch (a){
		case "Velocidade Final":variantes=["Tempo","Aceleração"];
		case "Tempo":variantes=["Velocidade Final","Aceleração"];
		case "Aceleração":  variantes=["Velocidade Final","Tempo"];
	}
	control.style.height=70+'px';
	control.appendChild(document.createElement('br'));
	criar(control,'span','sp1',(variantes[0].charAt(0)+' '));
	control.appendChild(document.createElement('input'));
	criar(control,'span','sp1',(variantes[1].charAt(0)+' '));	
	control.appendChild(document.createElement('input'));
	criar(control,'button','btn btn-primary btn-sm pronto2','pronto?');
	but= document.querySelector('button.pronto2');
	but.onclick=function(){
		if((document.querySelectorAll('input')[0].value!="")&&(document.querySelectorAll('input')[1].value!="")){
			v=[document.querySelectorAll('input')[0].value,document.querySelectorAll('input')[1].value];
			control.style.height=166+'px';	
		}
	}
}
function resultados(a,b,c){
	criar(control,'ul','ul1','');
	ul=document.querySelector('ul.ul1');
	criar(ul,'li','','');criar(ul,'li','','');criar(ul,'li','','');
	li=[document.querySelectorAll('li')[1],document.querySelectorAll('li')[0],document.querySelectorAll('li')[2]]
	switch (a){
		case 'Velocidade Final':calculos(1,c);criar(li[0],'p','','O '+b[0]+' total foi de : 	'+ c[0]+' segundos');criar(li[1],'p','','A '+b[1]+' total foi de : 	'+ c[1]+' metros/segundo²');criar(li[2],'p','','A '+a+' total foi de : 	'+(c[0]*c[1])+' metros/segundos');break;
		case 'Tempo':calculos(2,c);criar(li[0],'p','','A '+b[0]+' total foi de : 	'+ c[0]+' metros/segundos');criar(li[1],'p','','A '+b[1]+' total foi de : 	'+ c[1]+' metros/segundo²');criar(li[2],'p','','O '+a+' total foi de : 	'+(c[0]/c[1])+' segundos');break;
		case 'Aceleração':calculos(3,c);criar(li[0],'p','','A '+b[0]+' total foi de : 	'+ c[0]+' metros/segundos');criar(li[1],'p','','O '+b[1]+' total foi de : 	'+ c[1]+' segundos');criar(li[2],'p','','A '+a+' total foi de : 	'+(c[0]/c[1])+' metros/segundo²');break;
	}
}	
function calculos(a,c){
	if(a==3){
		x[0] = (c[0])/(c[1])+' = '+c[0]+' / '+c[1]; 
	}
	if(a==2){
		x[0] = (c[0])/(c[1])+' = '+c[0]+' / '+c[1]; 
	}
	if(a==1){	
		x[0] = (c[1])*(c[0])+' = '+c[0]+' * '+c[1]; 
	}
	console.log(a,c)
	var z=0
	setInterval(function(){
		
	},500);
}
