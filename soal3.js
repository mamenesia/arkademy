const cetak_gambar = (n) => {
    if(n%2 === 0){
        console.log("ERROR!!! Input Number Must Be An Odd Number!");
    } else {
        for(let row=0; row < n; row++){
            let lines = "";

            for(let col=0; col<n;col++){
                if(col === 0 || col === n-1){
                    lines += '*';
                } else if(row === Math.floor(n/2)){
                    lines += '*';
                } else {
                    lines += '=';
                }
            }
            console.log(lines)
        }
    }
};

cetak_gambar(5);