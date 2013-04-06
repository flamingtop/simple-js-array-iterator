# A simple javascript array iterator

    var
    a = [1,2,3],
    ai = new ArrayIterator(a);

    ai.current(); // 1
    ai.next(); // 2
    ai.next(); // 3
    ai.prev(); // 2
    ai.reset();
    ai.key(); // 0
    ai.current(); // 1


