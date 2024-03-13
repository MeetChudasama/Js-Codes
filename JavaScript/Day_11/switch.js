let i= 2
        switch(i){ //switch(2)
            case 1: i+= 3
            case 2: i+= 2  // i= 4
            case 3: i+= 1  // i= 5
            default: i+= 5 // i= 10
        }
    console.log(i); // 10
