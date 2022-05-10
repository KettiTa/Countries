//dropdown
const countries = ['UK', 'Latvia','Japan'],
    select = document.getElementById( 'countries' );

for( country in countries ) {
    
    select.add( new Option( countries[country] ) );
    
};

//text change

function display(){
    var e = document.getElementById("countries");
    var index = e.selectedIndex;
    if(index==0){
        document.getElementById("uk").style.display = 'block'
        document.getElementById("latvia").style.display = 'none'
        document.getElementById("japan").style.display = 'none'
    }
    else if(index==1){
        document.getElementById("uk").style.display = 'none'
        document.getElementById("latvia").style.display = 'block'
        document.getElementById("japan").style.display = 'none'
    }
    else if(index==2){
        document.getElementById("uk").style.display = 'none'
        document.getElementById("latvia").style.display = 'none'
        document.getElementById("japan").style.display = 'block'
    }
}
