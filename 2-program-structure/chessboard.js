// Chessboard
function chessBoard(size)
{
    let board = '';
    for(let i = 0; i < size; i++)
    {
        for(let j = 0; j < size; j++)
        {
            if((i + j) % 2 === 0) {
                board += '_';
            } else {
                board += '#';
            }
        }
        board += '\n';
    }
    console.log(board);
}
chessBoard(8);