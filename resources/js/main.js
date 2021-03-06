// Overlay functionality
function closeOverlay () {
  document.getElementById('my-overlay').style.height = '0%';
};
document.getElementById('my-overlay').addEventListener('click', function() {
  closeOverlay();
});

// Clears all currently highlighted boxes
function clearHighlights () {
  a4.classList.remove('box-highlight');
  b4.classList.remove('box-highlight');
  c4.classList.remove('box-highlight');
  d4.classList.remove('box-highlight');
  a3.classList.remove('box-highlight');
  b3.classList.remove('box-highlight');
  c3.classList.remove('box-highlight');
  d3.classList.remove('box-highlight');
  a2.classList.remove('box-highlight');
  b2.classList.remove('box-highlight');
  c2.classList.remove('box-highlight');
  d2.classList.remove('box-highlight');
  a1.classList.remove('box-highlight');
  b1.classList.remove('box-highlight');
  c1.classList.remove('box-highlight');
  d1.classList.remove('box-highlight');
};

// Clears any currently selected box
function clearSelection () {
  if (a4i.classList.contains('box-select')) {
    a4i.classList.remove('box-select');
  };
  if (b4i.classList.contains('box-select')) {
    b4i.classList.remove('box-select');
  };
  if (c4i.classList.contains('box-select')) {
    c4i.classList.remove('box-select');
  };
  if (d4i.classList.contains('box-select')) {
    d4i.classList.remove('box-select');
  };
  if (a3i.classList.contains('box-select')) {
    a3i.classList.remove('box-select');
  };
  if (b3i.classList.contains('box-select')) {
    b3i.classList.remove('box-select');
  };
  if (c3i.classList.contains('box-select')) {
    c3i.classList.remove('box-select');
  };
  if (d3i.classList.contains('box-select')) {
    d3i.classList.remove('box-select');
  };
  if (a2i.classList.contains('box-select')) {
    a2i.classList.remove('box-select');
  };
  if (b2i.classList.contains('box-select')) {
    b2i.classList.remove('box-select');
  };
  if (c2i.classList.contains('box-select')) {
    c2i.classList.remove('box-select');
  };
  if (d2i.classList.contains('box-select')) {
    d2i.classList.remove('box-select');
  };
  if (a1i.classList.contains('box-select')) {
    a1i.classList.remove('box-select');
  };
  if (b1i.classList.contains('box-select')) {
    b1i.classList.remove('box-select');
  };
  if (c1i.classList.contains('box-select')) {
    c1i.classList.remove('box-select');
  };
  if (d1i.classList.contains('box-select')) {
    d1i.classList.remove('box-select');
  };
};

// Checks if a piece is selected
function isSelected (square) {
  if (square.classList.contains('box-select')) {
    return true;
  } else {
    return false;
  };
};

// Moves piece
function movePiece (formerSquare, latterSquare) {
  if (formerSquare.classList.contains('fa-crow')) {
    formerSquare.classList.toggle('fa-crow');
    latterSquare.classList.toggle('fa-crow');
  } else if (formerSquare.classList.contains('fa-kiwi-bird')) {
    formerSquare.classList.toggle('fa-kiwi-bird');
    latterSquare.classList.toggle('fa-kiwi-bird');
  };
  clearHighlights();
  clearSelection();
}

// Checks each box to see if it is occupied by a piece
function a4Filled () {
  if (a4i.classList.contains('fa-crow') || a4i.classList.contains('fa-kiwi-bird')) {
    return true;
  } else {
    return false;
  };
};
function b4Filled () {
  if (b4i.classList.contains('fa-crow') || b4i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  };
};
function c4Filled () {
  if (c4i.classList.contains('fa-crow') || c4i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function d4Filled () {
  if (d4i.classList.contains('fa-crow') || d4i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function a3Filled () {
  if (a3i.classList.contains('fa-crow') || a3i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function b3Filled () {
  if (b3i.classList.contains('fa-crow') || b3i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function c3Filled () {
  if (c3i.classList.contains('fa-crow') || c3i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function d3Filled () {
  if (d3i.classList.contains('fa-crow') || d3i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function a2Filled () {
  if (a2i.classList.contains('fa-crow') || a2i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function b2Filled () {
  if (b2i.classList.contains('fa-crow') || b2i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function c2Filled () {
  if (c2i.classList.contains('fa-crow') || c2i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function d2Filled () {
  if (d2i.classList.contains('fa-crow') || d2i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function a1Filled () {
  if (a1i.classList.contains('fa-crow') || a1i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function b1Filled () {
  if (b1i.classList.contains('fa-crow') || b1i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function c1Filled () {
  if (c1i.classList.contains('fa-crow') || c1i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};
function d1Filled () {
  if (d1i.classList.contains('fa-crow') || d1i.classList.contains('fa-kiwi-bird')) {
    return true
  } else {
    return false
  }
};

// Variable shortcuts for each box
var a4 = document.getElementById('a4');
var b4 = document.getElementById('b4');
var c4 = document.getElementById('c4');
var d4 = document.getElementById('d4');
var a3 = document.getElementById('a3');
var b3 = document.getElementById('b3');
var c3 = document.getElementById('c3');
var d3 = document.getElementById('d3');
var a2 = document.getElementById('a2');
var b2 = document.getElementById('b2');
var c2 = document.getElementById('c2');
var d2 = document.getElementById('d2');
var a1 = document.getElementById('a1');
var b1 = document.getElementById('b1');
var c1 = document.getElementById('c1');
var d1 = document.getElementById('d1');

// Variable shortcuts for the i tags within each box
var a4i = document.getElementById('a4').children[0];
var b4i = document.getElementById('b4').children[0];
var c4i = document.getElementById('c4').children[0];
var d4i = document.getElementById('d4').children[0];
var a3i = document.getElementById('a3').children[0];
var b3i = document.getElementById('b3').children[0];
var c3i = document.getElementById('c3').children[0];
var d3i = document.getElementById('d3').children[0];
var a2i = document.getElementById('a2').children[0];
var b2i = document.getElementById('b2').children[0];
var c2i = document.getElementById('c2').children[0];
var d2i = document.getElementById('d2').children[0];
var a1i = document.getElementById('a1').children[0];
var b1i = document.getElementById('b1').children[0];
var c1i = document.getElementById('c1').children[0];
var d1i = document.getElementById('d1').children[0];


// These event listeners will either move a piece to the box that was clicked, or display available spaces for the box that was clicked
a4.addEventListener('click', function () {
  // If a piece is moving into this space
  if (a4.classList.contains('box-highlight')) {
    // South
    if (isSelected(a3i)) {
      movePiece(a3i, a4i);
    } else if (isSelected(a2i)) {
      movePiece(a2i, a4i);
    } else if (isSelected(a1i)) {
      movePiece(a1i, a4i);
    };
    // East
    if (isSelected(b4i)) {
      movePiece(b4i, a4i);
    } else if (isSelected(c4i)) {
      movePiece(c4i, a4i);
    } else if (isSelected(d4i)) {
      movePiece(d4i, a4i);
    };
    // If this piece is moving
  } else {
    clearHighlights();
    clearSelection();
    // Is this space occupied
    if (a4Filled() === false) {
      console.log('This space is empty');
    } else {
      a4i.classList.toggle('box-select');
      // If this piece is blocked
      if (b4Filled() === true && a3Filled() === true) {
        a4.classList.toggle('box-wiggle');
        setTimeout(function(){a4i.classList.toggle('box-select');a4.classList.toggle('box-wiggle')}, 500);
      };
      // South
      if (a3Filled() === false && a2Filled() === true) {
        a3.classList.toggle('box-highlight');
      } else if (a3Filled() === false && a2Filled() === false && a1Filled() === true) {
        a2.classList.toggle('box-highlight');
      } else if (a3Filled() === false && a2Filled() === false && a1Filled() === false) {
        a1.classList.toggle('box-highlight');
      };
      // East
      if (b4Filled() === false && c4Filled() === true) {
        b4.classList.toggle('box-highlight');
      } else if (b4Filled() === false && c4Filled() === false && d4Filled() === true) {
        c4.classList.toggle('box-highlight');
      } else if (b4Filled() === false && c4Filled() === false && d4Filled() === false) {
        d4.classList.toggle('box-highlight');
      };
    };
  };
});
b4.addEventListener('click', function () {
  // If a piece is moving into this space
  if (b4.classList.contains('box-highlight')) {
    // West
    if (isSelected(a4i)) {
      movePiece(a4i, b4i);
    };
    // South
    if (isSelected(b3i)) {
      movePiece(b3i, b4i);
    } else if (isSelected(b2i)) {
      movePiece(b2i, b4i);
    } else if (isSelected(b1i)) {
      movePiece(b1i, b4i);
    };
    // East
    if (isSelected(c4i)) {
      movePiece(c4i, b4i);
    } else if (isSelected(d4i)) {
      movePiece(d4i, b4i);
    };
  } else {
    clearHighlights();
    clearSelection();
    // If this space is empty
    if (b4Filled() === false) {
      console.log('This space is empty');
    } else {
      b4i.classList.toggle('box-select');
      // If this piece cannot move
      if (a4Filled() === true && b3Filled() === true && c4Filled() === true) {
        b4.classList.toggle('box-wiggle');
        setTimeout(function(){b4i.classList.toggle('box-select');b4.classList.toggle('box-wiggle')}, 500);
      };
      // Highlights available spaces to the west
      if (a4Filled() === false) {
        a4.classList.toggle('box-highlight');
      };
      // Highlights available spaces to the south
      if (b3Filled() === false && b2Filled() === true) {
        b3.classList.toggle('box-highlight');
      } else if (b3Filled() === false && b2Filled() === false && b1Filled() === true) {
        b2.classList.toggle('box-highlight');
      } else if (b3Filled() === false && b2Filled() === false && b1Filled() === false) {
        b1.classList.toggle('box-highlight');
      };
      // Highlights avilable spaces to the west
      if (c4Filled() === false && d4Filled() === true) {
        c4.classList.toggle('box-highlight');
      } else if (c4Filled() === false && d4Filled() === false) {
        d4.classList.toggle('box-highlight');
      };
    };
  };
});
c4.addEventListener('click', function () {
  if (c4.classList.contains('box-highlight')) {
    // West
    if (isSelected(b4i)) {
      movePiece(b4i, c4i);
    } else if (isSelected(a4i)) {
      movePiece(a4i, c4i);
    };
    // South
    if (isSelected(c3i)) {
      movePiece(c3i, c4i);
    } else if (isSelected(c2i)) {
      movePiece(c2i, c4i);
    } else if (isSelected(c1i)) {
      movePiece(c1i, c4i);
    };
    // East
    if (isSelected(d4i)) {
      movePiece(d4i, c4i);
    };
  } else {
    clearHighlights();
    clearSelection();
    // If this space is empty
    if (c4Filled() === false) {
      console.log('This space is empty');
    } else {
      c4i.classList.toggle('box-select');
      // If this piece cannot move
      if (b4Filled() === true && c3Filled() === true && d4Filled() === true) {
        c4.classList.toggle('box-wiggle');
        setTimeout(function(){c4i.classList.toggle('box-select');c4.classList.toggle('box-wiggle')}, 500);
      };
      // Highlights to the west
      if (b4Filled() === false && a4Filled() === true) {
        b4.classList.toggle('box-highlight');
      } else if (b4Filled() === false && a4Filled() === false) {
        a4.classList.toggle('box-highlight');
      };
      // Highlighting avilable spaces to the south
      if (c3Filled() === false && c2Filled() === true) {
        c3.classList.toggle('box-highlight');
      } else if (c3Filled() === false && c2Filled() === false && c1Filled() === true) {
        c2.classList.toggle('box-highlight');
      } else if (c3Filled() === false && c2Filled() === false && c1Filled() === false) {
        c1.classList.toggle('box-highlight');
      };
      // Highlights to the east
      if (d4Filled() === false) {
        d4.classList.toggle('box-highlight');
      };
    };
  };
});
d4.addEventListener('click', function () {
  if (d4.classList.contains('box-highlight')) {
    // West
    if (isSelected(c4i)) {
      movePiece(c4i, d4i);
    } else if (isSelected(b4i)) {
      movePiece(b4i, d4i);
    } else if (isSelected(a4i)) {
      movePiece(a4i, d4i);
    };
    // South
    if (isSelected(d3i)) {
      movePiece(d3i, d4i);
    } else if (isSelected(d2i)) {
      movePiece(d2i, d4i);
    } else if (isSelected(d1i)) {
      movePiece(d1i, d4i);
    };
  } else {
    clearHighlights();
    clearSelection();
    d4i.classList.toggle('box-select');
    // If this space is empty
    if (d4Filled() === false) {
      console.log('This space is empty');
    } else {
      // If this piece cannot move
      if (c4Filled() === true && d3Filled() === true) {
        d4.classList.toggle('box-wiggle');
        setTimeout(function(){d4i.classList.toggle('box-select');d4.classList.toggle('box-wiggle')}, 500)
      };
      // Highlighting avilable spaces to the west
      if (c4Filled() === false && b4Filled() === true) {
        c4.classList.toggle('box-highlight');;
      } else if (c4Filled() === false && b4Filled() === false && a4Filled() === true) {
        b4.classList.toggle('box-highlight');;
      } else if (c4Filled() === false && b4Filled() === false && a4Filled() === false) {
        a4.classList.toggle('box-highlight');;
      };
      // Highlighting avilable spaces to the south
      if (d3Filled() === false && d2Filled() === true) {
        d3.classList.toggle('box-highlight');
      } else if (d3Filled() === false && d2Filled() === false && d1Filled() === true) {
        d2.classList.toggle('box-highlight');
      } else if (d3Filled() === false && d2Filled() === false && d1Filled() === false) {
        d1.classList.toggle('box-highlight');
      };
    };
  };
});
a3.addEventListener('click', function () {
  if (a3.classList.contains('box-highlight')) {
    // North
    if (isSelected(a4i)) {
      movePiece(a4i, a3i);
    };
    // South
    if (isSelected(a2i)) {
      movePiece(a2i, a3i);
    } else if (isSelected(a1i)) {
      movePiece(a1i, a3i);
    };
    // East
    if (isSelected(b3i)) {
      movePiece(b3i, a3i);
    } else if (isSelected(c3i)) {
      movePiece(c3i, a3i);
    } else if (isSelected(d3i)) {
      movePiece(d3i, a3i);
    };
  } else {
    clearHighlights();
    clearSelection();
    // If this space is empty
    if (a3Filled() === false) {
      console.log('This space is empty')
    } else {
      a3i.classList.toggle('box-select');
      // If this piece cannot move
      if (a4Filled() === true && b3Filled() === true && a2Filled() === true) {
        a3.classList.toggle('box-wiggle');
        setTimeout(function(){a3i.classList.toggle('box-select');a3.classList.toggle('box-wiggle')}, 500);
      };
      // Highlights to the north
      if (a4Filled() === false) {
        a4.classList.toggle('box-highlight');;
      };
      // Highlights to the south
      if (a2Filled() === false && a1Filled() === true) {
        a2.classList.toggle('box-highlight');;
      } else if (a2Filled() === false && a1Filled() === false) {
        a1.classList.toggle('box-highlight');;
      };
      // Highlights to the east
      if (b3Filled() === false && c3Filled() === true) {
        b3.classList.toggle('box-highlight');;
      } else if (b3Filled() === false && c3Filled() === false && d3Filled() === true) {
        c3.classList.toggle('box-highlight');;
      } else if (b3Filled() === false && c3Filled() === false && d3Filled() === false) {
        d3.classList.toggle('box-highlight');;
      };
    };
  };
});
b3.addEventListener('click', function () {
  if (b3.classList.contains('box-highlight')) {
    // North
    if (isSelected(b4i)) {
      movePiece(b4i, b3i);
    };
    // West
    if (isSelected(a3i)) {
      movePiece(a3i, b3i);
    };
    // South
    if (isSelected(b2i)) {
      movePiece(b2i, b3i);
    } else if (isSelected(b1i)) {
      movePiece(b1i, b3i);
    };
    // East
    if (isSelected(c3i)) {
      movePiece(c3i, b3i);
    } else if (isSelected(d3i)) {
      movePiece(d3i, b3i);
    };
  } else {
    clearSelection();
    clearHighlights();
    if (b3Filled() === false) {
      console.log('This space is empty');
    } else {
      b3i.classList.toggle('box-select');
      if (b4Filled() === true && a3Filled() === true && b2Filled() === true && c3Filled() === true) {
        b3.classList.toggle('box-wiggle');
        setTimeout(function(){b3i.classList.toggle('box-select');b3.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (b4Filled() === false) {
        b4.classList.toggle('box-highlight');;
      };
      // West
      if (a3Filled() === false) {
        a3.classList.toggle('box-highlight');;
      };
      // South
      if (b2Filled() === false && b1Filled() === true) {
        b2.classList.toggle('box-highlight');;
      } else if (b2Filled() === false && b1Filled() === false) {
        b1.classList.toggle('box-highlight');;
      }
      // East
      if (c3Filled() === false && d3Filled() === true) {
        c3.classList.toggle('box-highlight');;
      } else if (c3Filled() === false && d3Filled() === false) {
        d3.classList.toggle('box-highlight');;
      };
    };
  };
});
c3.addEventListener('click', function () {
  if (c3.classList.contains('box-highlight')) {
    // North
    if (isSelected(c4i)) {
      movePiece(c4i, c3i);
    };
    // West
    if (isSelected(b3i)) {
      movePiece(b3i, c3i);
    } else if (isSelected(a3i)) {
      movePiece(a3i, c3i);
    };
    // South
    if (isSelected(c2i)) {
      movePiece(c2i, c3i);
    } else if (isSelected(c1i)) {
      movePiece(c1i, c3i);
    };
    // East
    if (isSelected(d3i)) {
      movePiece(d3i, c3i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (c3Filled() === false) {
      console.log('This space is empty');
    } else {
      c3i.classList.toggle('box-select');
      if (c4Filled() === true && b3Filled() === true && c2Filled() === true && d3Filled() === true) {
        c3.classList.toggle('box-wiggle');
        setTimeout(function(){c3i.classList.toggle('box-select');c3.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (c4Filled() === false) {
        c4.classList.toggle('box-highlight');;
      };
      // West
      if (b3Filled() === false && a3Filled() === true) {
        b3.classList.toggle('box-highlight');;
      } else if (b3Filled() === false && a3Filled() === false) {
        a3.classList.toggle('box-highlight');;
      };
      // South
      if (c2Filled() === false && c1Filled() === true) {
        c2.classList.toggle('box-highlight');
      } else if (c2Filled() === false && c1Filled() === false) {
        c1.classList.toggle('box-highlight');;
      };
      // East
      if (d3Filled() === false) {
        d3.classList.toggle('box-highlight');;
      };
    };
  };
});
d3.addEventListener('click', function () {
  if (d3.classList.contains('box-highlight')) {
    // North
    if (isSelected(d4i)) {
      movePiece(d4i, d3i);
    };
    // West
    if (isSelected(c3i)) {
      movePiece(c3i, d3i);
    } else if (isSelected(b3i)) {
      movePiece(b3i, d3i);
    } else if (isSelected(a3i)) {
      movePiece(a3i, d3i);
    };
    // South
    if (isSelected(d2i)) {
      movePiece(d2i, d3i);
    } else if (isSelected(d1i)) {
      movePiece(d1i, d3i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (d3Filled() === false) {
      console.log('This space is empty');
    } else {
      d3i.classList.toggle('box-select');
      if (d4Filled() === true && c3Filled() === true && d2Filled() === true) {
        d3.classList.toggle('box-wiggle');
        setTimeout(function(){d3i.classList.toggle('box-select');d3.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (d4Filled() === false) {
        d4.classList.toggle('box-highlight');;
      };
      // West
      if (c3Filled() === false && b3Filled() === true) {
        c3.classList.toggle('box-highlight');;
      } else if (c3Filled() === false && b3Filled() === false && a3Filled() === true) {
        b3.classList.toggle('box-highlight');;
      } else if (c3Filled() === false && b3Filled() === false && a3Filled() === false) {
        a3.classList.toggle('box-highlight');;
      };
      // South
      if (d2Filled() === false && d1Filled() === true) {
        d2.classList.toggle('box-highlight');;
      } else if (d2Filled() === false && d1Filled() === false) {
        d1.classList.toggle('box-highlight');;
      };
    };
  };
});
a2.addEventListener('click', function () {
  if (a2.classList.contains('box-highlight')) {
    // North
    if (isSelected(a3i)) {
      movePiece(a3i, a2i);
    } else if (isSelected(a4i)) {
      movePiece(a4i, a2i);
    };
    // South
    if (isSelected(a1i)) {
      movePiece(a1i, a2i);
    };
    // East
    if (isSelected(b2i)) {
      movePiece(b2i, a2i);
    } else if (isSelected(c2i)) {
      movePiece(c2i, a2i);
    } else if (isSelected(d2i)) {
      movePiece(d2i, a2i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (a2Filled() === false) {
      console.log('This space is empty');
    } else {
      a2i.classList.toggle('box-select');
      if (a3Filled() === true && b2Filled() === true && a1Filled() === true) {
        a2.classList.toggle('box-wiggle');
        setTimeout(function(){a2i.classList.toggle('box-select');a2.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (a3Filled() === false && a4Filled() === true) {
        a3.classList.toggle('box-highlight');
      } else if (a3Filled() === false && a4Filled() === false) {
        a4.classList.toggle('box-highlight');
      };
      // South
      if (a1Filled() === false) {
        a1.classList.toggle('box-highlight');
      };
      // East
      if (b2Filled() === false && c2Filled() === true) {
        b2.classList.toggle('box-highlight');
      } else if (b2Filled() === false && c2Filled() === false && d2Filled() === true) {
        c2.classList.toggle('box-highlight');
      } else if (b2Filled() === false && c2Filled() === false && c2Filled() === false) {
        d2.classList.toggle('box-highlight');
      };
    };
  };
});
b2.addEventListener('click', function () {
  if (b2.classList.contains('box-highlight')) {
    // North
    if (isSelected(b3i)) {
      movePiece(b3i, b2i);
    } else if (isSelected(b4i)) {
      movePiece(b4i, b2i);
    };
    // West
    if (isSelected(a2i)) {
      movePiece(a2i, b2i);
    };
    // South
    if (isSelected(b1i)) {
      movePiece(b1i, b2i);
    };
    // East
    if (isSelected(c2i)) {
      movePiece(c2i, b2i);
    } else if (isSelected(d2i)) {
      movePiece(d2i, b2i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (b2Filled() === false) {
      console.log('This space is empty');
    } else {
      b2i.classList.toggle('box-select');
      if (b3Filled() === true && c2Filled() === true && b1Filled() === true && a2Filled() === true) {
        b2.classList.toggle('box-wiggle');
        setTimeout(function(){b2i.classList.toggle('box-select');b2.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (b3Filled() === false && b4Filled() === true) {
        b3.classList.toggle('box-highlight');
      } else if (b3Filled() === false && b4Filled() === false) {
        b4.classList.toggle('box-highlight');
      };
      // East
      if (a2Filled() === false) {
        a2.classList.toggle('box-highlight');
      };
      // South
      if (b1Filled() === false) {
        b1.classList.toggle('box-highlight');
      };
      // East
      if (c2Filled() === false && d2Filled() === true) {
        c2.classList.toggle('box-highlight');
      } else if (c2Filled() === false && d2Filled() === false) {
        d2.classList.toggle('box-highlight');
      };
    };
  };
});
c2.addEventListener('click', function () {
  if (c2.classList.contains('box-highlight')) {
    // North
    if (isSelected(c3i)) {
      movePiece(c3i, c2i);
    } else if (isSelected(c4i)) {
      movePiece(c4i, c2i);
    };
    // West
    if (isSelected(b2i)) {
      movePiece(b2i, c2i);
    } else if (isSelected(a2i)) {
      movePiece(a2i, c2i);
    };
    // South
    if (isSelected(c1i)) {
      movePiece(c1i, c2i);
    };
    // East
    if (isSelected(d2i)) {
      movePiece(d2i, c2i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (c2Filled() === false) {
      console.log('This space is empty');
    } else {
      c2i.classList.toggle('box-select');
      if (c3Filled() === true && d2Filled() === true && c1Filled() === true && b2Filled() === true) {
        c2.classList.toggle('box-wiggle');
        setTimeout(function(){c2i.classList.toggle('box-select');c2.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (c3Filled() === false && c4Filled() === true) {
        c3.classList.toggle('box-highlight');
      } else if (c3Filled() === false && c4Filled() === false) {
        c4.classList.toggle('box-highlight');
      };
      // West
      if (b2Filled() === false && a2Filled() === true) {
        b2.classList.toggle('box-highlight');
      } else if (b2Filled() === false && a2Filled() === false) {
        a2.classList.toggle('box-highlight');
      };
      // South
      if (c1Filled() === false) {
        c1.classList.toggle('box-highlight');
      };
      // East
      if (d2Filled() === false) {
        d2.classList.toggle('box-highlight');
      };
    };
  };
});
d2.addEventListener('click', function () {
  if (d2.classList.contains('box-highlight')) {
    // North
    if (isSelected(d3i)) {
      movePiece(d3i, d2i);
    } else if (isSelected(d4i)) {
      movePiece(d4i, d2i);
    };
    // West
    if (isSelected(c2i)) {
      movePiece(c2i, d2i);
    } else if (isSelected(b2i)) {
      movePiece(b2i, d2i);
    } else if (isSelected(a2i)) {
      movePiece(a2i, d2i);
    };
    // South
    if (isSelected(d1i)) {
      movePiece(d1i, d2i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (d2Filled() === false) {
      console.log('This space is empty');
    } else {
      d2i.classList.toggle('box-select');
      if (d3Filled() === true && c2Filled() === true && d1Filled() === true) {
        d2.classList.toggle('box-wiggle');
        setTimeout(function(){d2i.classList.toggle('box-select');d2.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (d3Filled() === false && d4Filled() === true) {
        d3.classList.toggle('box-highlight');
      } else if (d3Filled() === false && d4Filled() === false) {
        d4.classList.toggle('box-highlight');
      };
      // West
      if (c2Filled() === false && b2Filled() === true) {
        c2.classList.toggle('box-highlight');
      } else if (c2Filled() === false && b2Filled() === false && a2Filled() === true) {
        b2.classList.toggle('box-highlight');
      } else if (c2Filled() === false && b2Filled() === false && a2Filled() === false) {
        a2.classList.toggle('box-highlight');
      };
      // South
      if (d1Filled() === false) {
        d1.classList.toggle('box-highlight');
      };
    };
  };
});
a1.addEventListener('click', function () {
  if (a1.classList.contains('box-highlight')) {
    // North
    if (isSelected(a2i)) {
      movePiece(a2i, a1i);
    } else if (isSelected(a3i)) {
      movePiece(a3i, a1i);
    } else if (isSelected(a4i)) {
      movePiece(a4i, a1i);
    };
    // East
    if (isSelected(b1i)) {
      movePiece(b1i, a1i);
    } else if (isSelected(c1i)) {
      movePiece(c1i, a1i);
    } else if (isSelected(d1i)) {
      movePiece(d1i, a1i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (a1Filled() == false) {
      console.log('This space is empty');
    } else {
      a1i.classList.toggle('box-select');
      if (a2Filled() === true && b1Filled() === true) {
        a1.classList.toggle('box-wiggle');
        setTimeout(function(){a1i.classList.toggle('box-select');a1.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (a2Filled() === false && a3Filled() === true) {
        a2.classList.toggle('box-highlight');
      } else if (a2Filled() === false && a3Filled() === false && a4Filled() === true) {
        a3.classList.toggle('box-highlight');
      } else if (a2Filled() === false && a3Filled() === false && a4Filled() === false) {
        a4.classList.toggle('box-highlight');
      };
      // East
      if (b1Filled() === false && c1Filled() === true) {
        b1.classList.toggle('box-highlight');
      } else if (b1Filled() === false && c1Filled() === false && d1Filled() === true) {
        c1.classList.toggle('box-highlight');
      } else if (b1Filled() === false && c1Filled() === false && d1Filled() === false) {
        d1.classList.toggle('box-highlight');
      };
    };
  };
});
b1.addEventListener('click', function () {
  if (b1.classList.contains('box-highlight')) {
    // North
    if (isSelected(b2i)) {
      movePiece(b2i, b1i);
    } else if (isSelected(b3i)) {
      movePiece(b3i, b1i);
    } else if (isSelected(b4i)) {
      movePiece(b4i, b1i);
    };
    // West
    if (isSelected(a1i)) {
      movePiece(a1i, b1i);
    };
    // East
    if (isSelected(c1i)) {
      movePiece(c1i, b1i);
    } else if (isSelected(d1i)) {
      movePiece(d1i, b1i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (b1Filled() === false) {
      console.log('This space is empty');
    } else {
      b1i.classList.toggle('box-select');
      if (b2Filled() === true && c1Filled() === true && a1Filled() === true) {
        b1.classList.toggle('box-wiggle');
        setTimeout(function(){b1i.classList.toggle('box-select');b1.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (b2Filled() === false && b3Filled() === true) {
        b2.classList.toggle('box-highlight');
      } else if (b2Filled() === false && b3Filled() === false && b4Filled() === true) {
        b3.classList.toggle('box-highlight');
      } else if (b2Filled() === false && b3Filled() === false && b4Filled() === false) {
        b4.classList.toggle('box-highlight');
      };
      // West
      if (a1Filled() === false) {
        a1.classList.toggle('box-highlight');
      };
      // East
      if (c1Filled() === false && d1Filled() === true) {
        c1.classList.toggle('box-highlight');
      } else if (c1Filled() === false && d1Filled() === false) {
        d1.classList.toggle('box-highlight');
      };
    };
  };
});
c1.addEventListener('click', function () {
  if (c1.classList.contains('box-highlight')) {
    // North
    if (isSelected(c2i)) {
      movePiece(c2i, c1i);
    } else if (isSelected(c3i)) {
      movePiece(c3i, c1i);
    } else if (isSelected(c4i)) {
      movePiece(c4i, c1i);
    };
    // West
    if (isSelected(b1i)) {
      movePiece(b1i, c1i);
    } else if (isSelected(a1i)) {
      movePiece(a1i, c1i);
    };
    // East
    if (isSelected(d1i)) {
      movePiece(d1i, c1i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (c1Filled() === false) {
      console.log('This space is empty');
    } else {
      c1i.classList.toggle('box-select');
      if (c2Filled() === true && d1Filled() === true && b1Filled() === true) {
        c1.classList.toggle('box-wiggle');
        setTimeout(function(){c1i.classList.toggle('box-select');c1.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (c2Filled() === false && c3Filled() === true) {
        c2.classList.toggle('box-highlight');
      } else if (c2Filled() === false && c3Filled() === false && c4Filled() === true) {
        c3.classList.toggle('box-highlight');
      } else if (c2Filled() === false && c3Filled() === false && c4Filled() === false) {
        c4.classList.toggle('box-highlight');
      };
      // West
      if (b1Filled() === false && a1Filled() === true) {
        b1.classList.toggle('box-highlight');
      } else if (b1Filled() === false && a1Filled() === false) {
        a1.classList.toggle('box-highlight');
      };
      // East
      if (d1Filled() === false) {
        d1.classList.toggle('box-highlight');
      };
    };
  };
});
d1.addEventListener('click', function () {
  if (d1.classList.contains('box-highlight')) {
    // North
    if (isSelected(d2i)) {
      movePiece(d2i, d1i);
    } else if (isSelected(d3i)) {
      movePiece(d3i, d1i);
    } else if (isSelected(d4i)) {
      movePiece(d4i, d1i);
    };
    // West
    if (isSelected(c1i)) {
      movePiece(c1i, d1i);
    } else if (isSelected(b1i)) {
      movePiece(b1i, d1i);
    } else if (isSelected(a1i)) {
      movePiece(a1i, d1i);
    };
  } else {
    clearHighlights();
    clearSelection();
    if (d1Filled() === false) {
      console.log('This space is empty');
    } else {
      d1i.classList.toggle('box-select');
      if (d2Filled() === true && c1Filled() === true) {
        d1.classList.toggle('box-wiggle');
        setTimeout(function(){d1i.classList.toggle('box-select');d1.classList.toggle('box-wiggle')}, 500);
      };
      // North
      if (d2Filled() === false && d3Filled() === true) {
        d2.classList.toggle('box-highlight');
      } else if (d2Filled() === false && d3Filled() === false && d4Filled() === true) {
        d3.classList.toggle('box-highlight');
      } else if (d2Filled() === false && d3Filled() === false && d4Filled() === false) {
        d4.classList.toggle('box-highlight');
      };
      // West
      if (c1Filled() === false && b1Filled() === true) {
        c1.classList.toggle('box-highlight');
      } else if (c1Filled() === false && b1Filled() === false && a1Filled() === true) {
        b1.classList.toggle('box-highlight');
      } else if (c1Filled() === false && b1Filled() === false && a1Filled() === false) {
        a1.classList.toggle('box-highlight');
      };
    };
  };
});
