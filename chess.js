
class Piece {
  
    constructor(){
        this.killed = false;
        this.white = false;
    }
  
     Piece(white)
    {
        this.setWhite(white);
    }
  
    isWhite()
    {
        return this.white;
    }
  
   setWhite( white)
    {
        this.white = white;
    }
  
    isKilled()
    {
        return this.killed;
    }
  
   setKilled( killed)
    {
        this.killed = killed;
    }
  
    canMove(board, start, end);
}

class Spot {

  
   constructor(x, y, piece)
    {
        this.setPiece(piece);
        this.setX(x);
        this.setY(y);
    }
  
   getPiece()
    {
        return this.piece;
    }
  
  setPiece(p)
    {
        this.piece = p;
    }
  
   getX()
    {
        return this.x;
    }
  
    setX(x)
    {
        this.x = x;
    }
  
   getY()
    {
        return this.y;
    }
  
   setY(y)
    {
        this.y = y;
    }
}



pawn = new Piece();
bishop = new Piece();