var Generator = (function(){

    var ascending = true;
    var lastnr = 0;
    var maxstep = 10;

    function updateData(arr)
    {

        if (Math.random() > .8 ||  lastnr <= 0 || lastnr >=100) ascending = !ascending;

        var movement = Math.floor(Math.random()*maxstep);

        var offset =  ascending ? movement :  -movement;

        var nr = lastnr + offset;

        if (nr < 0) nr = 0;

        if (nr > 100) nr = 100;

        arr.shift();
        arr.push(nr);


        lastnr = nr;
    }
    return {updateData: updateData};
})();