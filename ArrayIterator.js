
// a simple array iterator for javascript
function ArrayIterator(arr) {
    
    if (typeof arr.slice == 'function')
        var arr = arr;
    else
        throw 'not an array';

    var cursor = 0,
        cursorBackward = function() {
            if (cursor > 0)
                cursor--;
            else
                cursor = 0;
        },
        cursorForward = function() {
            if (cursor < arr.length-1)
                cursor++;
            else
                cursor = arr.length - 1;
        },
        isLast = function() {
            return cursor == arr.length - 1; 
        },
        isFirst = function() {
            return cursor == 0;
        };


    return {
        current: function() {
            return arr[cursor];
        },
        prev: function() {
            if (isFirst())
                // prefer using "\0" to indicate overflowed fetches
                // than throwing an exception here
                return "\0";
            cursorBackward();
            return this.current();
        },
        next: function() {
            if (isLast()) 
                return "\0";
            cursorForward();
            return this.current();
        },
        reset: function() {
            cursor = 0;
            return this;
        },
        key: function() {
            return cursor;
        }
    };

}









