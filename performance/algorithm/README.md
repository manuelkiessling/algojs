# Sort algorithm benchmarks

## Current results

### Chrome 19.0.1084.15 beta, Mac OS X 10.7.3, MacBook Pro 2.66 GHz Core i7

#### Native Array.sort()
    1,000,000 items sorted
        0.526 seconds
    1,901,140 items / second

#### mergesortQueue
    1,000,000 items sorted
        3.029 seconds
      330,141 items / second

#### mergesortArray
    1,000,000 items sorted
        0.757 seconds
    1,321,003 items / second


### Firefox 11.0, Mac OS X 10.7.3, MacBook Pro 2.66 GHz Core i7

#### Native Array.sort()
    1,000,000 items sorted
        2.242 seconds
      446,030 items / second

#### mergesortQueue
    1,000,000 items sorted
        5.642 seconds
      177,242 items / second

#### mergesortArray
    1,000,000 items sorted
         1.15 seconds
      869,565 items / second
