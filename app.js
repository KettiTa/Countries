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
        document.querySelector(".language").innerHTML = "Hello!"
    }
    else if(index==1){
        document.querySelector(".language").innerHTML = "Sveiks!"
    }
    else if(index==2){
        document.querySelector(".language").innerHTML = "こんにちは！"
    }
}
