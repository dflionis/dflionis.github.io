// Define the player stats for each game
const games = [
    [ // Game 1
        { Pos: 'C', No: 4, Name: 'C. Braun', Pts: 26, Min: 24, FGM: 11, FGA: 22, ThreePTM: 0, ThreePTA: 1, FTM: 4, FTA: 5, OReb: 7, DReb: 8, Blk: 1, Stl: 2, Ast: 3, TO: 0, Fouls: 2, Link: 'cbraun.html' },
        { Pos: 'PF', No: 11, Name: 'H. Gallatin', Pts: 26, Min: 24, FGM: 13, FGA: 18, ThreePTM: 0, ThreePTA: 4, FTM: 0, FTA: 0, OReb: 10, DReb: 8, Blk: 0, Stl: 3, Ast: 4, TO: 2, Fouls: 2, Link: 'hgallatin.html' },
        { Pos: 'SF', No: 9, Name: 'R. Guerin', Pts: 18, Min: 24, FGM: 9, FGA: 18, ThreePTM: 0, ThreePTA: 1, FTM: 0, FTA: 0, OReb: 5, DReb: 4, Blk: 1, Stl: 3, Ast: 5, TO: 1, Fouls: 0, Link: 'rguerin.html' },
        { Pos: 'SF', No: 12, Name: 'G. Yardley', Pts: 25, Min: 24, FGM: 11, FGA: 19, ThreePTM: 1, ThreePTA: 4, FTM: 2, FTA: 3, OReb: 4, DReb: 3, Blk: 0, Stl: 4, Ast: 5, TO: 5, Fouls: 4, Link: 'gyardley.html' },
        { Pos: 'SF', No: 16, Name: 'C. Hagan', Pts: 8, Min: 24, FGM: 3, FGA: 16, ThreePTM: 0, ThreePTA: 6, FTM: 2, FTA: 4, OReb: 2, DReb: 2, Blk: 0, Stl: 9, Ast: 7, TO: 2, Fouls: 2, Link: 'chagan.html' },
        { Pos: 'PF', No: 4, Name: 'D. Schayes', Pts: 19, Min: 24, FGM: 9, FGA: 14, ThreePTM: 1, ThreePTA: 2, FTM: 0, FTA: 0, OReb: 4, DReb: 4, Blk: 5, Stl: 1, Ast: 2, TO: 2, Fouls: 2, Link: 'dschayes.html' },
        { Pos: 'SF', No: 11, Name: 'P. Arizin', Pts: 15, Min: 24, FGM: 6, FGA: 16, ThreePTM: 1, ThreePTA: 6, FTM: 2, FTA: 2, OReb: 6, DReb: 3, Blk: 0, Stl: 8, Ast: 7, TO: 5, Fouls: 1, Link: 'parizin.html' },
        { Pos: 'SG', No: 21, Name: 'B. Sharman', Pts: 24, Min: 24, FGM: 11, FGA: 23, ThreePTM: 2, ThreePTA: 7, FTM: 0, FTA: 1, OReb: 3, DReb: 4, Blk: 0, Stl: 6, Ast: 3, TO: 3, Fouls: 2, Link: 'bsharman.html' },
        { Pos: 'PG', No: 14, Name: 'B. Cousy', Pts: 20, Min: 24, FGM: 9, FGA: 20, ThreePTM: 1, ThreePTA: 6, FTM: 1, FTA: 2, OReb: 3, DReb: 1, Blk: 0, Stl: 14, Ast: 7, TO: 6, Fouls: 3, Link: 'bcousy.html' },
        { Pos: 'C', No: 9, Name: 'B. Pettit', Pts: 16, Min: 24, FGM: 8, FGA: 18, ThreePTM: 0, ThreePTA: 3, FTM: 0, FTA: 0, OReb: 9, DReb: 8, Blk: 0, Stl: 1, Ast: 1, TO: 2, Fouls: 0, Link: 'bpettit.html' }
    ],
    [ // Game 2
        { Pos: 'PF', No: 11, Name: 'H. Gallatin', Pts: 28, Min: 24, FGM: 13, FGA: 19, ThreePTM: 0, ThreePTA: 2, FTM: 2, FTA: 4, OReb: 6, DReb: 3, Blk: 4, Stl: 5, Ast: 1, TO: 4, Fouls: 1, Link: 'hgallatin.html' },
        { Pos: 'C', No: 4, Name: 'C. Braun', Pts: 14, Min: 24, FGM: 5, FGA: 11, ThreePTM: 1, ThreePTA: 3, FTM: 3, FTA: 5, OReb: 4, DReb: 9, Blk: 2, Stl: 3, Ast: 2, TO: 3, Fouls: 3, Link: 'cbraun.html' },
        { Pos: 'SF', No: 9, Name: 'R. Guerin', Pts: 34, Min: 24, FGM: 13, FGA: 20, ThreePTM: 3, ThreePTA: 7, FTM: 5, FTA: 5, OReb: 11, DReb: 4, Blk: 2, Stl: 7, Ast: 1, TO: 1, Fouls: 3, Link: 'rguerin.html' },
        { Pos: 'SF', No: 12, Name: 'G. Yardley', Pts: 19, Min: 24, FGM: 9, FGA: 19, ThreePTM: 1, ThreePTA: 6, FTM: 0, FTA: 0, OReb: 4, DReb: 3, Blk: 0, Stl: 4, Ast: 3, TO: 3, Fouls: 4, Link: 'gyardley.html' },
        { Pos: 'SF', No: 16, Name: 'C. Hagan', Pts: 19, Min: 24, FGM: 9, FGA: 35, ThreePTM: 1, ThreePTA: 22, FTM: 0, FTA: 0, OReb: 1, DReb: 1, Blk: 1, Stl: 20, Ast: 5, TO: 5, Fouls: 1, Link: 'chagan.html' },
        { Pos: 'C', No: 9, Name: 'B. Pettit', Pts: 18, Min: 24, FGM: 9, FGA: 13, ThreePTM: 0, ThreePTA: 2, FTM: 0, FTA: 0, OReb: 4, DReb: 1, Blk: 2, Stl: 5, Ast: 1, TO: 2, Fouls: 4, Link: 'bpettit.html' },
        { Pos: 'SG', No: 21, Name: 'B. Sharman', Pts: 25, Min: 24, FGM: 10, FGA: 18, ThreePTM: 3, ThreePTA: 7, FTM: 2, FTA: 2, OReb: 5, DReb: 4, Blk: 0, Stl: 8, Ast: 4, TO: 4, Fouls: 2, Link: 'bsharman.html' },
        { Pos: 'SF', No: 11, Name: 'P. Arizin', Pts: 25, Min: 24, FGM: 11, FGA: 24, ThreePTM: 3, ThreePTA: 11, FTM: 0, FTA: 2, OReb: 9, DReb: 2, Blk: 0, Stl: 8, Ast: 4, TO: 5, Fouls: 0, Link: 'parizin.html' },
        { Pos: 'PG', No: 14, Name: 'B. Cousy', Pts: 33, Min: 24, FGM: 12, FGA: 25, ThreePTM: 7, ThreePTA: 15, FTM: 2, FTA: 2, OReb: 5, DReb: 2, Blk: 0, Stl: 15, Ast: 4, TO: 5, Fouls: 2, Link: 'bcousy.html' },
        { Pos: 'PF', No: 4, Name: 'D. Schayes', Pts: 18, Min: 24, FGM: 8, FGA: 15, ThreePTM: 0, ThreePTA: 1, FTM: 2, FTA: 2, OReb: 5, DReb: 7, Blk: 1, Stl: 2, Ast: 4, TO: 1, Fouls: 1, Link: 'dschayes.html' }
    ],
    [ // Game 3
        { Pos: 'PF', No: 11, Name: 'H. Gallatin', Pts: 30, Min: 24, FGM: 15, FGA: 20, ThreePTM: 0, ThreePTA: 1, FTM: 0, FTA: 0, OReb: 3, DReb: 2, Blk: 5, Stl: 3, Ast: 6, TO: 3, Fouls: 1, Link: 'hgallatin.html' },
        { Pos: 'C', No: 4, Name: 'C. Braun', Pts: 26, Min: 24, FGM: 13, FGA: 15, ThreePTM: 0, ThreePTA: 1, FTM: 0, FTA: 0, OReb: 2, DReb: 3, Blk: 1, Stl: 3, Ast: 5, TO: 0, Fouls: 0, Link: 'cbraun.html' },
        { Pos: 'SF', No: 9, Name: 'R. Guerin', Pts: 19, Min: 24, FGM: 9, FGA: 12, ThreePTM: 1, ThreePTA: 2, FTM: 0, FTA: 0, OReb: 4, DReb: 6, Blk: 0, Stl: 13, Ast: 9, TO: 4, Fouls: 3, Link: 'rguerin.html' },
        { Pos: 'SF', No: 16, Name: 'C. Hagan', Pts: 29, Min: 24, FGM: 13, FGA: 23, ThreePTM: 0, ThreePTA: 2, FTM: 3, FTA: 4, OReb: 5, DReb: 3, Blk: 0, Stl: 8, Ast: 12, TO: 2, Fouls: 1, Link: 'chagan.html' },
        { Pos: 'SF', No: 12, Name: 'G. Yardley', Pts: 24, Min: 24, FGM: 11, FGA: 21, ThreePTM: 0, ThreePTA: 4, FTM: 2, FTA: 2, OReb: 5, DReb: 2, Blk: 0, Stl: 17, Ast: 10, TO: 3, Fouls: 3, Link: 'gyardley.html' },
        { Pos: 'C', No: 9, Name: 'B. Pettit', Pts: 24, Min: 24, FGM: 12, FGA: 16, ThreePTM: 0, ThreePTA: 0, FTM: 0, FTA: 0, OReb: 2, DReb: 9, Blk: 0, Stl: 2, Ast: 4, TO: 0, Fouls: 0, Link: 'bpettit.html' },
        { Pos: 'SG', No: 21, Name: 'B. Sharman', Pts: 52, Min: 24, FGM: 23, FGA: 28, ThreePTM: 4, ThreePTA: 8, FTM: 2, FTA: 2, OReb: 5, DReb: 1, Blk: 0, Stl: 11, Ast: 10, TO: 2, Fouls: 3, Link: 'bsharman.html' },
        { Pos: 'SF', No: 11, Name: 'P. Arizin', Pts: 37, Min: 24, FGM: 15, FGA: 25, ThreePTM: 5, ThreePTA: 11, FTM: 2, FTA: 2, OReb: 5, DReb: 2, Blk: 0, Stl: 16, Ast: 11, TO: 1, Fouls: 1, Link: 'parizin.html' },
        { Pos: 'PG', No: 14, Name: 'B. Cousy', Pts: 28, Min: 24, FGM: 11, FGA: 19, ThreePTM: 2, ThreePTA: 6, FTM: 4, FTA: 4, OReb: 1, DReb: 0, Blk: 0, Stl: 18, Ast: 15, TO: 3, Fouls: 2, Link: 'bcousy.html' },
        { Pos: 'PF', No: 4, Name: 'D. Schayes', Pts: 24, Min: 24, FGM: 11, FGA: 13, ThreePTM: 0, ThreePTA: 1, FTM: 2, FTA: 2, OReb: 4, DReb: 2, Blk: 0, Stl: 11, Ast: 10, TO: 1, Fouls: 0, Link: 'dschayes.html' }
    ]
];

// Function to calculate percentages with 3 significant digits
function calculatePercentage(numerator, denominator) {
    if (denominator === 0) return '.000';
    return (numerator / denominator).toFixed(3);
}

// Function to populate tables

// Function to populate tables
function populateTable(tableId, gameData) {
    const tableBody = document.querySelector(`#${tableId} tbody`);
    tableBody.innerHTML = ''; // Clear previous contents

    gameData.forEach(player => {
        const row = document.createElement('tr');

        // Calculate percentages
        const fgPercent = calculatePercentage(player.FGM, player.FGA);
        const threePtPercent = calculatePercentage(player.ThreePTM, player.ThreePTA);
        const ftPercent = calculatePercentage(player.FTM, player.FTA);

        // Create table cells
        const cells = [
            player.Pos, player.No,
            // Name cell with hyperlink
            `<a href="${player.Link}">${player.Name}</a>`,
            player.Pts, player.Min,
            player.FGM, player.FGA, fgPercent, player.ThreePTM, player.ThreePTA,
            threePtPercent, player.FTM, player.FTA, ftPercent, player.OReb,
            player.DReb, player.OReb + player.DReb, player.Blk, player.Stl,
            player.Ast, player.TO, player.Fouls
        ];

        cells.forEach(cellContent => {
            const cell = document.createElement('td');
            cell.innerHTML = cellContent; // Use innerHTML to insert HTML for links
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
}

// Populate all tables
populateTable('nba-stats-1', games[0]);
populateTable('nba-stats-2', games[1]);
populateTable('nba-stats-3', games[2]);
