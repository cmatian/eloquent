const min = (a, b) => {
    console.log(a >= b ? b : a);
};

min(2, 3); // 2
min(-1 , 4); // -1
min(2.304, -5.4); // -5.4
min(0 , 0); // 0
min(1, 1); // 1