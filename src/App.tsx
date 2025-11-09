import React, { useState, useEffect } from 'react';
import { Shuffle, RotateCcw, Trophy, Clock, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [tiles, setTiles] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Initialize puzzle
  useEffect(() => {
    initializePuzzle();
  }, []);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isWon) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isWon]);

  // Custom cursor effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const addHoverEffect = () => cursor.classList.add('hover');
    const removeHoverEffect = () => cursor.classList.remove('hover');

    document.addEventListener('mousemove', moveCursor);
    
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverEffect);
      el.addEventListener('mouseleave', removeHoverEffect);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverEffect);
        el.removeEventListener('mouseleave', removeHoverEffect);
      });
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  const initializePuzzle = () => {
    const initialTiles = Array.from({ length: 15 }, (_, i) => i + 1).concat([0]);
    shuffleTiles(initialTiles);
    setTiles(initialTiles);
    setMoves(0);
    setTime(0);
    setIsPlaying(false);
    setIsWon(false);
  };

  const shuffleTiles = (tilesArray: number[]) => {
    for (let i = tilesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tilesArray[i], tilesArray[j]] = [tilesArray[j], tilesArray[i]];
    }
  };

  const getEmptyIndex = () => tiles.indexOf(0);

  const canMove = (index: number) => {
    const emptyIndex = getEmptyIndex();
    const row = Math.floor(index / 4);
    const col = index % 4;
    const emptyRow = Math.floor(emptyIndex / 4);
    const emptyCol = emptyIndex % 4;

    return (
      (Math.abs(row - emptyRow) === 1 && col === emptyCol) ||
      (Math.abs(col - emptyCol) === 1 && row === emptyRow)
    );
  };

  const moveTile = (index: number) => {
    if (!canMove(index)) return;

    if (!isPlaying) setIsPlaying(true);

    const newTiles = [...tiles];
    const emptyIndex = getEmptyIndex();
    
    [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
    
    setTiles(newTiles);
    setMoves(prev => prev + 1);

    // Check if won
    const isComplete = newTiles.slice(0, 15).every((tile, i) => tile === i + 1);
    if (isComplete) {
      setIsWon(true);
      setIsPlaying(false);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/FEEHAB copy copy.png" 
              alt="FEEHAB" 
              className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4"
            />
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                2830 ERROR
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 animate-blink">
                Website is down by FEEHAB
              </p>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 mb-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Under Maintenance</h2>
            <p className="text-gray-300 text-lg">
              FEEHAB is cooking something for greater output 🔥
            </p>
            <p className="text-gray-400 text-sm mt-2">
              You can play this puzzle game for now while we work on something amazing!
            </p>
          </div>
        </div>

        {/* Puzzle Game */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-blue-400 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              15-Puzzle Game
            </h3>
            {isWon && (
              <div className="flex items-center text-green-400">
                <Trophy className="w-5 h-5 mr-1" />
                <span className="text-sm font-semibold">Won!</span>
              </div>
            )}
          </div>

          {/* Game Stats */}
          <div className="flex justify-between mb-4 text-sm">
            <div className="flex items-center text-gray-300">
              <Clock className="w-4 h-4 mr-1" />
              {formatTime(time)}
            </div>
            <div className="text-gray-300">
              Moves: {moves}
            </div>
          </div>

          {/* Puzzle Grid */}
          <div className="grid grid-cols-4 gap-2 mb-6 bg-gray-900/50 p-4 rounded-xl">
            {tiles.map((tile, index) => (
              <button
                key={index}
                onClick={() => moveTile(index)}
                disabled={tile === 0 || isWon}
                className={`
                  aspect-square rounded-lg font-bold text-lg transition-all duration-200
                  ${tile === 0 
                    ? 'bg-transparent' 
                    : canMove(index)
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 cursor-pointer transform hover:scale-105 shadow-lg'
                      : 'bg-gray-700 cursor-not-allowed'
                  }
                  ${isWon && tile !== 0 ? 'bg-gradient-to-br from-green-500 to-emerald-600' : ''}
                `}
              >
                {tile !== 0 && tile}
              </button>
            ))}
          </div>

          {/* Game Controls */}
          <div className="flex gap-3">
            <button
              onClick={initializePuzzle}
              className="flex-1 flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold"
            >
              <Shuffle className="w-4 h-4 mr-2" />
              New Game
            </button>
            <button
              onClick={initializePuzzle}
              className="flex items-center justify-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Game Instructions */}
          <div className="mt-4 text-xs text-gray-400 text-center">
            <p>Click on tiles adjacent to the empty space to move them.</p>
            <p>Arrange numbers 1-15 in order to win!</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 FEEHAB. Something big is coming soon... 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;