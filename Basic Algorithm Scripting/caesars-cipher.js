/*

Bonfire: Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13( encodedStr ) {
    var codeArr     = encodedStr.split( '' );
    var decodedArr  = [];

    codeArr.map( function( element ) {
        if( /[A-Za-z]/g.test( element ) )
            decodedArr.push( String.fromCharCode( element.charCodeAt( 0 ) + ( element.toUpperCase( ) <= 'M' ? 13 : -13 ) ) );
        else if( /[ \.\!\?\"\-]/g.test( element ) )
            decodedArr.push( element );
    } );

    return decodedArr.join( '' );
}

// Test Cases

rot13( 'SERR PBQR PNZC' );
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");