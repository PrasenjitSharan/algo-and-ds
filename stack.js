function Stack () {
  this._data = [];
}

Stack.prototype = {
  push: function (value) {
    this._data.push (value);
    return true;
  },
  
  pop: function () {
    return this._data.pop ();
  },
  
  print: function () {
    console.log (this._data);
  },
  
  isEmpty: function () {
    return this._data.length === 0;
  },
  
  peek: function () {
    return this._data [this._data.length - 1];
  },

  // Sort a stack (minimum should be at the top)
  sort: function () {
    let s = new Stack ();
    while (!this.isEmpty ()) {
      let temp = this.pop ();
      // Push items from s to this stack until s's top element is
      // greater than temp
      while (!s.isEmpty () && s.peek () > temp) {
        this.push (s.pop ());
      }
      s.push (temp);
    }
    
    while (!s.isEmpty ()) {
      this.push (s.pop ());
    }
  }
};

let s = new Stack ();
s.push (3);
s.push (10);
s.push (12);
s.push (1);
s.push (7);
s.pop ();
s.sort ();

s.print ();
