var IndexCtrl = function($scope) {
  $scope.title = 'Game of Life App';
  $scope.rows = [];
  var rowCount = 16;
  var colCount = 16;
}
//   //figure out how to input row number and column number to display a table.
//   //apply 
//   // I need to get the neighbor coordinates
//   //apply rules
//   // rule 1: Any live cell with fewer than two live neighbors dies, as if caused by under-population.  
            
// // get neighbors
// var neighbors = getNeighborCoordinates();
// var numberOfNeighborsAlive = 0;
// // apply rules    
//   if($scope.rows.isAlive === true) {
//             // rule 1: Any live cell with fewer than two live neighbors 
//             // dies, as if caused by under-population.  
//             if(numberOfNeighborsAlive < 2) {
//                 $scope.rowsisAlive = false;
//             }
//             // rule 2: Any live cell with two or three live neighbors 
//             // lives on to the next generation.
//             // do nothing
            
//             // rule 3: any live cell with more than three live neighbors 
//             // dies, as if by overcrowding.
//             if(numberOfNeighborsAlive > 3) {
//                 $scope.rows.isAlive = false;
//             }
//         }
//         else {
//             // rule 4: Any dead cell with exactly three live neighbors 
//             // becomes a live cell, as if by reproduction.
//             if(numberOfNeighborsAlive == 3) {
//                 $scope.rows.isAlive = true;
//             }
                                  
//                 // setup board
//                 // all coordinates of lifeforms                
//                 // generate random life
//                 // update cells in board
//                 // check if in coordinates of life forms
  
