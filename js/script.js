// Map Initillization
var sloc,endloc;
var place1, place2;

var map = new MapmyIndia.Map('map', {
    center: [22.09, 77.3],
    zoom:5,
    search:false
});

// search plugin Initillization
var option_search = {
    location:[28.09, 77.23],
    distance:true,
    fitbounds:false,
    geolocation:true,
    hyperlocal:true
}
new MapmyIndia.search(document.getElementById("from"),option_search,callback1);
new MapmyIndia.search(document.getElementById("to"),option_search,callback2);

// creating function
function callback1(data){
    if(data)
    {
        if(data.error)
        {
            console.warn(data.error)
        }
        else
        {
            var dt=data[0];
            if(!dt) return false;
            var eloc=dt.eLoc;
            var lat=dt.latitude,lng=dt.longitude;
            sloc=eloc;                    
            place1=dt.placeName+(dt.placeAddress?", "+dt.placeAddress:"");
        }
    }
}
function callback2(data){
    if(data)
    {
        if(data.error)
        {
            console.warn(data.error)
        }
        else
        {
            var dt=data[0];
            if(!dt) return false;
            var eloc=dt.eLoc;
            var lat=dt.latitude,lng=dt.longitude;
            endloc=eloc;                
            place2=dt.placeName+(dt.placeAddress?", "+dt.placeAddress:"");
        }
    }
}

function calcRoute(){
    // direction plugin 
    var direction_option = {
        map:map,
        start:{label:place1, geoposition:sloc},
        end:{label:place2, geoposition:endloc},
        divId:'output',
        divWidth:1000,
        alongTheRoute:{
            Options:{
                "page":2,
                "buffer":1500,
                "sort":false
            },
            category:[
                {catCode:'FINATM',icon:"img/atm.png",width: '50px', height: '50px', lable:'ATM'},
                {catCode:'HOTALL',icon:"img/hotel.png",width: '50px', height: '50px', lable:'HOTEL'},
                {catCode:'PETROL',icon:"img/petrol-pump.png",width: '50px', height: '50px', lable:'petrol pumps'},
            ],
            poicallback:function(data){
                console.log(data)
            }
        },
        callback:function(data){
            console.log(data)
        }
    }
    var direction_plugin = new MapmyIndia.direction(direction_option);
}


