//add dropdown
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
        document.getElementById("eng").style.display = 'block'
        document.getElementById("lv").style.display = 'none'
        document.getElementById("jp").style.display = 'none'
    }
    else if(index==1){
        document.getElementById("eng").style.display = 'none'
        document.getElementById("lv").style.display = 'block'
        document.getElementById("jp").style.display = 'none'
    }
    else if(index==2){
        document.getElementById("eng").style.display = 'none'
        document.getElementById("lv").style.display = 'none'
        document.getElementById("jp").style.display = 'block'
    }
}
