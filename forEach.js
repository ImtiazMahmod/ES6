//for each simillar to map 
    ////not return any value
    ///array.forEach(function(element,index,array){consle.log(element,index,array);},this);
    const ages = [5,6,8,9,3];
    const newAges = e=> console.log(e*2); 
    // ages.forEach(newAges);
    ages.forEach((e,index,array)=> 
        {
            console.log(e,index,array);
        }
        )