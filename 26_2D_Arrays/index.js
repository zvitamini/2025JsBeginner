/* Burada yapacağımız şey derslerde kalın kafamın almakta en çok zorlandğı kavram olan iki boyutlu matris ve array yapısı

    [[X,O,O],
     [O,O,X],
     [O,X,O]]

 NE BİLİYİM HALA ANLAMIYORUM BEN BU YAPILARI AMA BUGÜN ANLAMAYA İNAT ETTİM!
 */
const matrix = [[1,2,3],
                [4,5,6],
                [7,8,9]];
const telefonMatrix =[[1,2,3],
                     [4,5,6],
                     [7,8,9],
                     [`*`,0,`#`]];
/*matrix[1][1]=`X`;
matrix[0][0]=`O`;
matrix[2][0]=`X`;
matrix[0][1]=`O`;
matrix[0][2]=`X`;

matrix[1][0]=`O`;
matrix[1][2]=`O`;
matrix[2][2]=`X`;
matrix[2][1]=`X`;
console.log(matrix);
*/
for (let row of matrix) {
    const rowString = row.join(` `);
    //*console.log(row);
    console.log(rowString);
    
}

console.log("   ");

for (let satir of telefonMatrix) {
    const satirYazdir = satir.join(` `);
    console.log(satirYazdir);
    
}