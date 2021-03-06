function max(a,b)
{
    if(a==b)
         return a;
    else{
        if(a>b)
            return a;
        else
            return b;
       }
}
 
// Returns minimum number of platforms required
function findPlatform( arr, dep, n)
{
 
    // plat_needed indicates number of platforms
    // needed at a time
    var plat_needed = 1, result = 1;
    var i = 1, j = 0;
 
    // run a nested loop to find overlap
    for (var i = 0; i < n; i++) {
        // minimum platform
        plat_needed = 1;
 
        for (var j = i + 1; j < n; j++) {
            // check for overlap
            if ((arr[i] >= arr[j] && arr[i] <= dep[j]) ||
        (arr[j] >= arr[i] && arr[j] <= dep[i]))
                plat_needed++;
        }
 
        // update result
        result = max(result, plat_needed);
    }
 
    return result;
}
let arrival = [2.00, 2.10, 3.00, 3.20, 3.50, 5.00];
let departure = [2.30, 3.40, 3.20, 4.30, 4.00, 5.20];
n = 2;
console.log(findPlatform(arrival, departure, n));